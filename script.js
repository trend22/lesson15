'use strict'

const ready = () => {
  const body = document.querySelector('body')

  const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize

    this.createElem = function () {
      if (this.selector[0] === '.') {
        let getSelectorWithNoDot = this.selector.slice(1, this.selector.length)

        const newElemDiv = document.createElement('div')
        newElemDiv.textContent = 'квадрат ' + this.selector
        newElemDiv.classList.add(getSelectorWithNoDot)
        newElemDiv.style.cssText =
          `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`

        //выводим блок div в html
        body.append(newElemDiv)
      } else if (this.selector[0] === '#') {
        let getSelectorWithNoId = this.selector.slice(1, this.selector.length)

        const newElemP = document.createElement('p')
        newElemP.textContent = 'Созданный элемент p c id: ' + this.selector
        newElemP.setAttribute('id', getSelectorWithNoId)

        newElemP.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`
        body.append(newElemP)
      }
    }
  }

  const Square = function (selector, height, width, bg, fontSize, position) {
    DomElement.call(this, selector, height, width, bg, fontSize)

    this.position = position

    this.createPosition = function () {
      const styleAdd = document.querySelector(selector)
      styleAdd.style.position = position
    }
  }

  //связываем прототипы Square и DomElement
  Square.prototype = Object.create(DomElement.prototype)
  //создаём блок и вызываем метод
  const square = new Square('.square', '100px', '100px', 'red', '16px', 'absolute')
  square.createElem()
  square.createPosition()
  //вводим свойства квадрату для рассчета перемещения
  square.horizontalPx = 0
  square.vertikalPx = 0
  //метод обрабатывающий нажатие кнопки клавиатуры события keydown
  square.moveSquare = function (event) {
    const squareDiv = document.querySelector(square.selector)

    switch (true) {
      case event.key === 'ArrowLeft':
        this.horizontalPx += -10
        squareDiv.style.marginLeft = this.horizontalPx + 'px'
        break
      case event.key === 'ArrowRight':
        this.horizontalPx += 10
        squareDiv.style.marginLeft = this.horizontalPx + 'px'
        break
      case event.key === 'ArrowDown':
        this.vertikalPx += 10
        squareDiv.style.marginTop = this.vertikalPx + 'px'
        break
      case event.key === 'ArrowUp':
        this.vertikalPx += -10
        squareDiv.style.marginTop = this.vertikalPx + 'px'
        break
      default:
        console.log(alert('нажмите клавиши влево, вправо, вниз или вверх на клавиатуре.'))
    }
  }
  //вешаем событие на кнопки клавиатуры
  document.addEventListener('keydown', square.moveSquare.bind(square))
}

document.addEventListener('DOMContentLoaded', ready)