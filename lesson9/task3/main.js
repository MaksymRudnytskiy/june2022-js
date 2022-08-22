// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


let block = document.createElement('div')
block.classList.add('wrap','collapse','alpha','beta')
block.innerText = 'Block tack'
block.style.background = 'silver'
block.style.color = 'red'
block.style.fontSize = '50px'
document.body.appendChild(block)
document.body.appendChild(block.cloneNode(true))