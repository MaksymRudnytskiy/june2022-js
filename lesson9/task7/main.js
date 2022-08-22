// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let div = document.createElement('div')
div.classList.add('text')
div.innerText = 'Text'

document.body.appendChild(div)

let btn = document.getElementsByTagName('button')[0]

btn.onclick = function () {
    div.style.display = 'none'
    console.log('click')
};




