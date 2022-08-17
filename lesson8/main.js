// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

// метод 1
// let users = [
//     new User(1,'User1','User1Sur','user1@mail.com',478965696),
//     new User(2,'User2','User2Sur','user2@mail.com',270257098),
//     new User(3,'User3','User3Sur','user3@mail.com',367854327),
//     new User(4,'User4','User4Sur','user4@mail.com',988668543),
//     new User(5,'User5','User5Sur','user5@mail.com',123456789),
//     new User(6,'User6','User6Sur','user6@mail.com',987654321),
//     new User(7,'User7','User7Sur','user7@mail.com',285836805),
//     new User(8,'User8','User8Sur','user8@mail.com',758905431),
//     new User(9,'User9','User9Sur','user9@mail.com',879421347),
//     new User(10,'User10','User10Sur','user10@mail.com',975541246)
// ]


// метод 2
let users = []

let user1 = new User(1, 'User1', 'User1Sur', 'user1@mail.com', 478965696)
let user2 = new User(2, 'User2', 'User2Sur', 'user2@mail.com', 270257098)
let user3 = new User(3, 'User3', 'User3Sur', 'user3@mail.com', 367854327)
let user4 = new User(4, 'User4', 'User4Sur', 'user4@mail.com', 988668543)
let user5 = new User(5, 'User5', 'User5Sur', 'user5@mail.com', 123456789)
let user6 = new User(6, 'User6', 'User6Sur', 'user6@mail.com', 987654321)
let user7 = new User(7, 'User7', 'User7Sur', 'user7@mail.com', 285836805)
let user8 = new User(8, 'User8', 'User8Sur', 'user8@mail.com', 758905431)
let user9 = new User(9, 'User9', 'User9Sur', 'user9@mail.com', 879421347)
let user10 = new User(10, 'User10', 'User10Sur', 'user10@mail.com', 975541246)

users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)

console.log(users)

// ---------------------------------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = users.filter(value => value.id % 2 === 0)

console.log(filter)

// ------------------------------------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// зростанню
let sort = users.sort((a, b) => a.id - b.id)

// зворотно
// let sort = users.sort((a, b) => b.id - a.id)

console.log(sort)

// ------------------------------------------------------------------------------------------------------------------
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name, surname, email, phone, order) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.order = order
}

let clients = []

let client1 = new Client(1, 'Client1', 'Client1Sur', 'client1@mail.com', 478965696, ['js', 'java', 'node', 'c++', 'html', 'typeScript', 'react'])
let client2 = new Client(2, 'Client2', 'Client2Sur', 'client2@mail.com', 478965696, ['js', 'java', 'c++', 'html', 'typeScript'])
let client3 = new Client(3, 'Client3', 'Client3Sur', 'client3@mail.com', 478965696, ['js'])
let client4 = new Client(4, 'Client4', 'Client4Sur', 'client4@mail.com', 478965696, ['js', 'java', 'node'])
let client5 = new Client(5, 'Client5', 'Client5Sur', 'client5@mail.com', 478965696, ['js', 'java', 'node', 'c++', 'html'])
let client6 = new Client(6, 'Client6', 'Client6Sur', 'client6@mail.com', 478965696, ['js', 'java', 'node', 'c++'])
let client7 = new Client(7, 'Client7', 'Client7Sur', 'client7@mail.com', 478965696, ['js', 'java'])
let client8 = new Client(8, 'Client8', 'Client8Sur', 'client8@mail.com', 478965696, ['js', 'java', 'node', 'c++', 'html', 'typeScript'])
let client9 = new Client(9, 'Client9', 'Client9Sur', 'client9@mail.com', 478965696, ['js', 'java', 'node', 'c++', 'html', 'typeScript', 'react'])
let client10 = new Client(10, 'Client10', 'Client10Sur', 'client10@mail.com', 478965696, ['js', 'java', 'node', 'c++'])

clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)

console.log(clients)

// ------------------------------------------------------------------------------------------------------------------
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClient = clients.sort((a, b) => a.order.length - b.order.length)

console.log(sortClient)


// ------------------------------------------------------------------------------------------------------------------
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model = model
    this.producerr = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(
            `
            Model: ${model}
            Producer: ${producer}
            Year: ${year}
            Max Speed: ${maxSpeed}
            Engine Volume: ${engineVolume}
            `
        )
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}

let car = new Car('Cayenne', 'Porsche', 2003, 152, 3.6)

console.log(car)

car.drive()
car.info()
car.increaseMaxSpeed(177)
car.changeYear(2015)
car.addDriver('Max')

console.log(car)

// ------------------------------------------------------------------------------------------------------------------
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model
        this.producerr = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.engineVolume = engineVolume
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log(
            `
            Model: ${this.model}
            Producer: ${this.producer}
            Year: ${this.year}
            Max Speed: ${this.maxSpeed}
            Engine Volume: ${this.engineVolume}
            `
        )
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed
    }

    changeYear(newValue) {
        this.year = newValue
    }

    addDriver(driver) {
        this.driver = driver
    }
}

let car2 = new Car2('Cayenne', 'Porsche', 2003, 152, 3.6)

console.log(car2)

car2.drive()
car2.info()
car2.increaseMaxSpeed(177)
car2.changeYear(2015)
car2.addDriver('Max')

console.log(car2)

// ------------------------------------------------------------------------------------------------------------------
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, size) {
        this.name = name
        this.age = age
        this.size = size
    }
}

let cinderellas = []

let cinderella1 = new Cinderella('Cinderella1', 16, 34)
let cinderella2 = new Cinderella('Cinderella2', 18, 38)
let cinderella3 = new Cinderella('Cinderella3', 21, 42)
let cinderella4 = new Cinderella('Cinderella4', 17, 37)
let cinderella5 = new Cinderella('Cinderella5', 15, 33)
let cinderella6 = new Cinderella('Cinderella6', 20, 35)
let cinderella7 = new Cinderella('Cinderella7', 16, 40)
let cinderella8 = new Cinderella('Cinderella8', 22, 41)
let cinderella9 = new Cinderella('Cinderella9', 19, 36)
let cinderella10 = new Cinderella('Cinderella10', 18, 39)

cinderellas.push(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10)

console.log(cinderellas)

class Prince {
    constructor(name, age, shoe) {
        this.name = name
        this.age = age
        this.shoe = shoe
    }
}

let prince = new Prince('Prince', 25, 35)

for (const cinderella of cinderellas) {
    if (prince.shoe === cinderella.size){
        console.log(`Prince ${prince.name} found ${cinderella.name}`)
    }
}

let findCinderella = cinderellas.find(value => value.size === prince.shoe)

console.log(findCinderella)












