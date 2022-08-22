// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let div = document.createElement('div')
    div.classList.add('item')

    let title = document.createElement('h1')
    title.classList.add('heading')
    title.innerHTML = course.title
    div.appendChild(title)

    let p = document.createElement('p')
    p.classList.add('description')
    p.innerHTML = course.monthDuration
    div.appendChild(p)

    document.body.appendChild(div)
}






