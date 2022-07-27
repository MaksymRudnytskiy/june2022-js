// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = []

array[0] = 'max'
console.log(array[0])

array[1] = 2
console.log(array[1])

array[2] = true
console.log(array[2])

array[3] = 123
console.log(array[3])

array[4] = false
console.log(array[4])

array[5] = ['js','java']
console.log(array[5])

array[6] = 'computer'
console.log(array[6])

array[7] = 987.13
console.log(array[7])

array[8] = 89
console.log(array[8])

array[9] = 'car'
console.log(array[9])

console.log(array)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'The Way of Kings',
    pageCount: 1007,
    genre: 'High fantasy'
}

let book2 = {
    title: 'Treasure Island',
    pageCount: 292,
    genre: 'Adventure'
}

let book3 = {
    title: 'The Library of the Dead',
    pageCount: 439,
    genre: 'Thriller'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book4 = {
    title: 'The Way of Kings',
    pageCount: 1007,
    genre: 'High fantasy',
    authors: [
        {
            name: 'Brandon Sanderson',
            age: 47
        }
    ]
}

let book5 = {
    title: 'Treasure Island',
    pageCount: 292,
    genre: 'Adventure',
    authors: [
        {
            name: 'Robert Louis Stevenson',
            age: 44
        }
    ]
}

let book6 = {
    title: 'The Library of the Dead',
    pageCount: 439,
    genre: 'Thriller',
    authors: [
        {
            name: 'Glenn Cooper',
            age: 69
        }
    ]
}



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let array2 = [
    {
        name: 'Leanne Graham',
        username: 'Bret',
        password: 'pass1'
    },
    {
        name: 'Ervin Howell',
        username: 'Antonette',
        password: 'pass2'
    },
    {
        name: 'Clementine Bauch',
        username: 'Samantha',
        password: 'pass3'
    },
    {
        name: 'Patricia Lebsack',
        username: 'Karianne',
        password: 'pass4'
    },
    {
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        password: 'pass5'
    },
    {
        name: 'Dennis Schulist',
        username: 'Corkery',
        password: 'pass6'
    },
    {
        name: 'Kurtis Weissnat',
        username: 'Skiles',
        password: 'pass7'
    },
    {
        name: 'Nicholas Runolfsdottir',
        username: 'Maxime',
        password: 'pass8'
    },
    {
        name: 'Glenna Reichert',
        username: 'Delphine',
        password: 'pass9'
    },
    {
        name: 'Clementina DuBuque',
        username: 'Moriah',
        password: 'pass10'
    }
]


console.log(array2[0].password)

console.log(array2[1]['password'])

console.log(array2[2].password)

console.log(array2[3]['password'])

console.log(array2[4].password)

console.log(array2[5]['password'])

console.log(array2[6].password)

console.log(array2[7]['password'])

console.log(array2[8].password)

console.log(array2[9]['password'])





