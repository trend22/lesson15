'use strict'

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
      newElemDiv.textContent =
        'Созданный элемент div c классом: ' + this.selector
      newElemDiv.classList.add(getSelectorWithNoDot)

      //выводим блок div в html
      body.append(newElemDiv)
    } else if (this.selector[0] === '#') {
      let getSelectorWithNoId = this.selector.slice(1, this.selector.length)

      const newElemP = document.createElement('p')
      newElemP.textContent = 'Созданный элемент p c id: ' + this.selector
      newElemP.setAttribute('id', getSelectorWithNoId)

      newElemP.style.cssText =
        'height: ' +
        this.height +
        ';' +
        'width: ' +
        this.width +
        ';' +
        'background: ' +
        this.bg +
        ';' +
        'font-size: ' +
        this.fontSize +
        ';'
      body.append(newElemP)
    }
  }
}

//создаём блок и вызываем метод
const domElement1 = new DomElement('.block')
domElement1.createElem()

const domElement2 = new DomElement('#paragraph', '20px', '30px', 'red', '30px')
domElement2.createElem()

console.log(domElement1)
console.log(domElement2)
