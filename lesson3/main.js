// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt()
//
// if (x !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
//
// let a = 1
//
// if (a !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
//
// a = 0
//
// if (a !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
//
// a = -3
//
// if (a !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let time = +prompt('enter time')
//
// if (time >= 1 && time <= 15) {
//     console.log('first quarter')
// } else if (time >= 16 && time <= 30) {
//     console.log('second quarter')
// } else if (time >= 31 && time <= 45) {
//     console.log('third quarter')
// }else if (time >= 46 && time <= 60) {
//     console.log('fourth quarter')
// } else {
//     console.log('invalid time')
// }
//
//
//
// let day = +prompt('enter day')
//
// if (day >= 1 && day <= 10) {
//     console.log('first decade')
// } else if (day >= 11 && day <= 20) {
//     console.log('second decade')
// } else if (day >= 21 && day <= 31) {
//     console.log('third decade')
// } else {
//     console.log('invalid day')
// }


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

// let dayOfWeek = +prompt()
//
// switch (dayOfWeek) {
//     case 1:
//         console.log('Monday')
//         break
//     case 2:
//         console.log('Tuesday')
//         break
//     case 3:
//         console.log('Wednesday')
//         break
//     case 4:
//         console.log('Thursday')
//         break
//     case 5:
//         console.log('Friday')
//         break
//     case 6:
//         console.log('Saturday')
//         break
//     case 7:
//         console.log('Sunday')
//         break
//     default:
//         console.log('error')
// }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.


// let firstNumber = +prompt()
//
// let secondNumber = +prompt()
//
// if (firstNumber > secondNumber) {
//     console.log(firstNumber)
// } else if (firstNumber < secondNumber) {
//     console.log(secondNumber)
// } else if (firstNumber == secondNumber) {
//     console.log('the numbers ere equal')
// } else {
//     console.log('error')
// }


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)


let x = prompt() || 'falsy'

console.log(x)








