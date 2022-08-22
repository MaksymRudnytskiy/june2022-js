// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png


for (const course of coursesArray) {
    let div = document.createElement('div')
    div.classList.add('block')

    let title = document.createElement('div')
    title.classList.add('title')
    title.innerHTML = `Title: ${course.title}`
    div.appendChild(title)

    let time = document.createElement('div')
    time.classList.add('time')

    let monthDuration = document.createElement('div')
    monthDuration.classList.add('monthDuration')
    monthDuration.innerHTML = `Month Duration: ${course.monthDuration}`
    time.appendChild(monthDuration)

    let hourDuration = document.createElement('div')
    hourDuration.classList.add('hourDuration')
    hourDuration.innerHTML = `Hours Duration: ${course.hourDuration}`
    time.appendChild(hourDuration)

    let ul = document.createElement('ul')
    ul.classList.add('ul')

    for (const module of course.modules) {
        let list = document.createElement('li')
        list.classList.add('li')
        list.innerHTML = `${module}`
        ul.appendChild(list)
    }

    document.body.appendChild(div)
    div.appendChild(time)
    div.appendChild(ul)
}




