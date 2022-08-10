// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hello = 'hello world'
let lorem = 'lorem ipsum'
let js = 'javascript is cool'

console.log('hello world', hello.length)
console.log('lorem ipsum', lorem.length)
console.log('javascript is cool', js.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let helloUp = hello.toUpperCase()
let loremUp = lorem.toUpperCase()
let jsUp = js.toUpperCase()

console.log(helloUp)
console.log(loremUp)
console.log(jsUp)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(helloUp.toLowerCase())
console.log(loremUp.toLowerCase())
console.log(jsUp.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '

console.log(str.indexOf('d'))
console.log(str.lastIndexOf('g'))

let newStr = str.substring(1,12 + 1)
console.log(newStr)

// --------------------------------------------------------------------------------------------------------
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні'

function stringToarray(str) {
    return str.split(' ')
}

let arr =  stringToarray(str1)

console.log(arr)

// ------------------------------------------------------------------------------------------------------------
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0]

let map = numbers.map(value => value.toString())

console.log(map)

// --------------------------------------------------------------------------------------------------------------
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

function sortNums(numss, direction){
    if (direction==='ascending'){
        numss.sort((num1, num2) => num1 - num2)
    }
    if (direction==='descending'){
        numss.sort((num1, num2) => num2 - num1)
    }
}

sortNums(nums, 'ascending')
console.log(nums)

sortNums(nums, 'descending')
console.log(nums)

// -----------------------------------------------------------------------------------------------------------------------
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//

let sort = coursesAndDurationArray.sort((a, b) => {
    if (a.monthDuration > b.monthDuration) {
        return 1
    }
    if (a.monthDuration < b.monthDuration) {
        return -1
    }
    if (a.monthDuration === b.monthDuration) {
        return 0
    }
})

console.log(sort)

let filter = sort.filter(value => value.monthDuration > 5)

console.log(filter)


// --------------------------------------------------------------------------------------------------------------------
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//

let deck = [
    {color: "red", cardSuit: "hearts", value: "Ace"},
    {color: "black", cardSuit: "clubs", value: "Ace"},
    {color: "red", cardSuit: "diamonds", value: "Ace"},
    {color: "black", cardSuit: "spades", value: "Ace"},
    {color: "red", cardSuit: "hearts", value: 6},
    {color: "black", cardSuit: "clubs", value: 9},
    {color: "red", cardSuit: "diamonds", value: 8},
    {color: "black", cardSuit: "spades", value: 9},
    {color: "red", cardSuit: "hearts", value: 10},
    {color: "black", cardSuit: "clubs", value: 10},
    {color: "red", cardSuit: "diamonds", value: 9},
    {color: "black", cardSuit: "spades", value: 10},
    {color: "red", cardSuit: "hearts", value: "Jack"},
    {color: "black", cardSuit: "clubs", value: "Jack"},
    {color: "red", cardSuit: "diamonds", value: "Jack"},
    {color: "black", cardSuit: "spades", value: "Jack"},
    {color: "red", cardSuit: "hearts", value: "Queen"},
    {color: "black", cardSuit: "clubs", value: "Queen"},
    {color: "red", cardSuit: "diamonds", value: "Queen"},
    {color: "black", cardSuit: "spades", value: "Queen"},
    {color: "red", cardSuit: "hearts", value: "King"},
    {color: "black", cardSuit: "clubs", value: "King"},
    {color: "red", cardSuit: "diamonds", value: "King"},
    {color: "black", cardSuit: "spades", value: "King"}
];

let aceSpades = deck.find(value => value.value === 'Ace' && value.cardSuit === 'spades')
console.log(aceSpades)

let filter6 = deck.filter(value => value.value === 6)
console.log(filter6)

let filterRed = deck.filter(value => value.color === 'red')
console.log(filterRed)

let filterDiamonds = deck.filter(value => value.cardSuit === 'diamonds')
console.log(filterDiamonds)

let filterClubs = deck.filter(value => value.cardSuit === 'clubs' && value.value > 8)
console.log('Clubs' ,filterClubs)

// -----------------------------------------------------------------------------------------------------------
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


