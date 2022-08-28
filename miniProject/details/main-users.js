let url = new URL(location.href)

let id = url.searchParams.get('id')

let div = document.createElement('div')
div.classList.add('item')
document.body.appendChild(div)

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {

            let divUser = document.createElement('div')
            divUser.classList.add('divUser')
            div.appendChild(divUser)

            let id = document.createElement('p')
            id.classList.add('id')
            id.innerHTML = `ID: ${user.id}`
            divUser.appendChild(id)

            let name = document.createElement('p')
            name.classList.add('name')
            name.innerHTML = `Name: ${user.name}`
            divUser.appendChild(name)

            let userName = document.createElement('p')
            userName.classList.add('username')
            userName.innerHTML = `Username: ${user.username}`
            divUser.appendChild(userName)

            let userEmail = document.createElement('p')
            userEmail.classList.add('email')
            userEmail.innerHTML = `Email: ${user.email}`
            divUser.appendChild(userEmail)

            let addressDiv = document.createElement('div')
            addressDiv.innerHTML = `Address:`
            addressDiv.classList.add('addressDiv')
            divUser.appendChild(addressDiv)

            let street = document.createElement('p')
            street.innerHTML = `Street: ${user.address.street}`
            addressDiv.appendChild(street)

            let suite = document.createElement('p')
            suite.innerHTML = `Suite: ${user.address.suite}`
            addressDiv.appendChild(suite)

            let city = document.createElement('p')
            city.innerHTML = `Suite: ${user.address.city}`
            addressDiv.appendChild(city)

            let zipcode = document.createElement('p')
            zipcode.classList.add('zipcode')
            zipcode.innerHTML = `Suite: ${user.address.zipcode}`
            addressDiv.appendChild(zipcode)

            let geoDiv = document.createElement('div')
            geoDiv.innerHTML = `Geo: lat:${user.address.geo.lat}, lng:${user.address.geo.lng}`
            geoDiv.classList.add('addressDiv')
            divUser.appendChild(geoDiv)

            let userPhone = document.createElement('p')
            userPhone.classList.add('phone')
            userPhone.innerHTML = `Phone: ${user.phone}`
            divUser.appendChild(userPhone)

            let userWebsite = document.createElement('p')
            userWebsite.classList.add('website')
            userWebsite.innerHTML = `Website: ${user.website}`
            divUser.appendChild(userWebsite)

            let companyDiv = document.createElement('div')
            companyDiv.innerHTML = `Company Information:`
            companyDiv.classList.add('companyDiv')
            divUser.appendChild(companyDiv)

            let companyName = document.createElement('p')
            companyName.innerHTML = `Name: ${user.company.name}`
            companyDiv.appendChild(companyName)

            let catchPhrase = document.createElement('p')
            catchPhrase.innerHTML = `Catch Phrase: ${user.company.catchPhrase}`
            companyDiv.appendChild(catchPhrase)

            let catchBs = document.createElement('p')
            catchBs.innerHTML = `BS: ${user.company.bs}`
            companyDiv.appendChild(catchBs)

            let divBtn = document.createElement('div')
            divBtn.classList.add('divBtn')
            div.appendChild(divBtn)

            let button = document.createElement('button')
            button.classList.add('button')
            button.innerText = 'post of current user'
            button.onclick = () => {

                let divPost = document.createElement('div')
                divPost.classList.add('divPost')

                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                            for (const post of posts) {
                                let title = document.createElement('p')
                                title.classList.add('title')
                                title.innerHTML = `Title: ${post.title}`
                                divPost.appendChild(title)

                                let a = document.createElement('a')
                                a.classList.add('button')
                                a.innerText = 'post of current user'
                                a.href = `../posts/post-details.html?id=${post.id}`
                                divPost.appendChild(a)
                            }


                        }
                    )
                divUser.appendChild(divPost)
            }
            divBtn.appendChild(button)


        }
    )

