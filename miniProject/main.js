let div = document.createElement('div')
div.classList.add('item')

document.body.appendChild(div)

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {

            for (const user of users) {


                let divUser = document.createElement('div')
                divUser.classList.add('divUser')
                div.appendChild(divUser)

                let divInfo = document.createElement('div')
                divInfo.classList.add('divInfo')
                divUser.appendChild(divInfo)

                let userID = document.createElement('div')
                userID.classList.add('id')
                userID.innerHTML = `ID: ${user.id}`
                divInfo.appendChild(userID)

                let userName = document.createElement('div')
                userName.classList.add('username')
                userName.innerHTML = `Username: ${user.username}`
                divInfo.appendChild(userName)

                let a = document.createElement('a')
                a.classList.add('button')
                a.innerText = 'Details'
                a.href = `details/user-details.html?id=${user.id}`
                divUser.appendChild(a)




            }
        }
    )

