let url = new URL(location.href)

let id = url.searchParams.get('id')

let users = url.searchParams.get('users')

fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(response => response.json())
    .then(users => {

            for (const user of users) {
                let div = document.createElement('div')
                div.classList.add('item')

                let userID = document.createElement('p')
                userID.classList.add('id')
                userID.innerHTML = `ID: ${user.id}`
                div.appendChild(userID)

                let userName = document.createElement('p')
                userName.classList.add('username')
                userName.innerHTML = `Username: ${user.username}`
                div.appendChild(userName)

                let userEmail = document.createElement('p')
                userEmail.classList.add('email')
                userEmail.innerHTML = `Username: ${user.email}`
                div.appendChild(userEmail)

                document.body.appendChild(div)
            }
        }
    )

// fetch(`https://jsonplaceholder.typicode.com/users/`)
//     .then(response => response.json())
//     .then(users => users.map(user => {
//             let div = document.createElement('div')
//             div.classList.add('item')
//
//             let userID = document.createElement('p')
//             userID.classList.add('id')
//             userID.innerHTML = `ID: ${users.id}`
//             div.appendChild(userID)
//
//             let userName = document.createElement('p')
//             userName.classList.add('username')
//             userName.innerHTML = `Username: ${user.username}`
//             div.appendChild(userName)
//
//             let userEmail = document.createElement('p')
//             userEmail.classList.add('email')
//             userEmail.innerHTML = `Username: ${user.email}`
//             div.appendChild(userEmail)
//
//             document.body.appendChild(div)
//         })
//     )
