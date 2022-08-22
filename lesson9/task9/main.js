// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)






let btn = document.getElementsByTagName('button')[0]

let line = document.getElementsByClassName('input1')
let cell = document.getElementsByClassName('input2')
let content = document.getElementsByClassName('input3')



btn.onclick = function (e) {
    e.preventDefault()


};