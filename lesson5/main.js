// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function areaRectangle(a, b) {
//     console.log(a * b)
// }
//
// areaRectangle(10, 15)
//
// // --------------------------------------------------------
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function areaCircle(r) {
//     console.log(3.14 * (r * r))
// }
//
// areaCircle(15)
//
// // ------------------------------------------------------------------------
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function areaCylinder(h, r) {
//     let calculation = (2 * 3.14 * r * h) + (2 * 3.14 * r * r)
//     return calculation
// }
//
// let cylinder = areaCylinder(5, 100)
// console.log(cylinder)
//
// // -------------------------------------------------------------------------
// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// let array = ['js', 'java', 'node']
//
// function arrayPrinter(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
//
// arrayPrinter(array)
//
// // -------------------------------------------------------------------------
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function createP(paragraph) {
//     return document.write(`
//         <p>${paragraph}</p>
//     `)
// }
//
// createP('lorem')
//
// // -------------------------------------------------------------------------
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function createList(list) {
//     return document.write(`
//         <ul>
//             <li>${list}</li>
//             <li>${list}</li>
//             <li>${list}</li>
//         </ul>
//     `)
// }
//
// createList('list')
//
// // -----------------------------------------------------------------------------
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// // function createList2(list,listLength) {
// //     return document.write(`
// //         <ul>
// //             for (let i = 0; i < listLength.length; i++) {
// //                 document.write(<li>${list}</li>);
// //             }
// //
// //         </ul>
// //     `)
// // }
//
// function createList2(list, listLength) {
//     document.write(`<ul>`);
//     for (let i = 0; i < listLength; i++) {
//         document.write(`<li>${list}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// // function createList2(list,listLength) {
// //     function li(list,listLength) {
// //         for (let i = 0; i < listLength.length; i++) {
// //             document.write(`<li>${list}</li>`)
// //         }
// //     }
// //     document.write(`<ul>`);
// //     li(list,listLength)
// //     document.write(`</ul>`);
// // }
//
// createList2('list2', 4)
//
//
// // ------------------------------------------------------------------------------------------------------------------
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let array2 = ['js', 'java', 'node', 12, 999, true, false, 432]
//
// function arrayPrinter2(array2) {
//     document.write(`<ul>`)
//     for (const arrayElement of array2) {
//         document.write(`
//             <li>${arrayElement}</li>
//             `)
//     }
//     document.write(`</ul>`)
// }
//
// arrayPrinter2(array2)
//
// // --------------------------------------------------------------------------------------------------------
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
//
// let users = [
//     {
//         id: 1,
//         name: 'User1',
//         age: 20
//     },
//     {
//         id: 2,
//         name: 'User2',
//         age: 25
//     },
//     {
//         id: 3,
//         name: 'User3',
//         age: 30
//     }
// ]
//
// function usersFunction(array) {
//     for (const arrayElement of array) {
//         document.write(`
//             <div>ID: ${arrayElement.id}</div>
//             <div>Name: ${arrayElement.name}</div>
//             <div>Age: ${arrayElement.age}</div>
//         `)
//     }
// }
//
// usersFunction(users)
//
// // ---------------------------------------------------------------------------------------------------------------------
// // - створити функцію яка повертає найменьше число з масиву
//
// let arrOfNum = [12, 569, 99, 53, 8, 33]
//
// function minorNumb(array) {
//     let num = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (num > array[i]) {
//             num = array[i];
//         }
//     }
//     console.log(num)
// }
//
// minorNumb(arrOfNum)

// ----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arrOfNum2 = [12, 25, 51]

function sum(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

console.log(sum(arrOfNum2))


