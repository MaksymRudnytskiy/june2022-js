// Є масив:
arr = ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let menu = document.getElementsByClassName('menu')[0]

for (const item of arr) {
    let li = document.createElement('li')
    li.innerText = item

    menu.appendChild(li)
}