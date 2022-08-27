

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {

            for (const user of users) {
                let div = document.createElement('div')
                div.classList.add('item')

                let userID = document.createElement('div')
                userID.classList.add('id')
                userID.innerHTML = `ID: ${user.id}`
                div.appendChild(userID)

                let userName = document.createElement('div')
                userName.classList.add('username')
                userName.innerHTML = `Username: ${user.username}`
                div.appendChild(userName)

                let a = document.createElement('a')
                a.classList.add('button')
                a.innerText = 'Details'
                a.href = `details/user-details.html?id=${user.id}`
                div.appendChild(a)

                // let button = document.createElement('button')
                // button.classList.add('button')
                // button.innerText = 'Details'
                // div.appendChild(button)
                // button.onclick = () => {
                //     location.href = `details/user-details.html?user=${user.id}`
                // }

                document.body.appendChild(div)
            }
//
        }
    )