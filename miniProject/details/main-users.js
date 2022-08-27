let url = new URL(location.href)

let id = url.searchParams.get('id')

let userId = url.searchParams.get('userId')

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
            let div = document.createElement('div')
            div.classList.add('item')

            let userID = document.createElement('p')
            userID.classList.add('id')
            userID.innerHTML = `ID: ${user.id}`
            div.appendChild(userID)

            let name = document.createElement('p')
            name.classList.add('name')
            name.innerHTML = `Name: ${user.name}`
            div.appendChild(name)

            let userName = document.createElement('p')
            userName.classList.add('username')
            userName.innerHTML = `Username: ${user.username}`
            div.appendChild(userName)

            let userEmail = document.createElement('p')
            userEmail.classList.add('email')
            userEmail.innerHTML = `Email: ${user.email}`
            div.appendChild(userEmail)

            let addressDiv = document.createElement('div')
            addressDiv.innerHTML = `Address:`
            addressDiv.classList.add('addressDiv')
            div.appendChild(addressDiv)

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
            div.appendChild(geoDiv)

            let userPhone = document.createElement('p')
            userPhone.classList.add('phone')
            userPhone.innerHTML = `Phone: ${user.phone}`
            div.appendChild(userPhone)

            let userWebsite = document.createElement('p')
            userWebsite.classList.add('website')
            userWebsite.innerHTML = `Website: ${user.website}`
            div.appendChild(userWebsite)

            let companyDiv = document.createElement('div')
            companyDiv.innerHTML = `Company Information:`
            companyDiv.classList.add('companyDiv')
            div.appendChild(companyDiv)

            let companyName = document.createElement('p')
            companyName.innerHTML = `Name: ${user.company.name}`
            companyDiv.appendChild(companyName)

            let catchPhrase = document.createElement('p')
            catchPhrase.innerHTML = `Catch Phrase: ${user.company.catchPhrase}`
            companyDiv.appendChild(catchPhrase)

            let catchBs = document.createElement('p')
            catchBs.innerHTML = `BS: ${user.company.bs}`
            companyDiv.appendChild(catchBs)

            let a = document.createElement('a')
            a.classList.add('button')
            a.innerText = 'post of current user'
            a.href = `../posts/post-details.html?id=${user.id}`
            div.appendChild(a)

            // let a = document.createElement('a')
            // a.classList.add('button')
            // a.innerText = 'post of current user'
            // a.href = `../posts/post-details.html?userId=${user.userId}`
            // div.appendChild(a)

            document.body.appendChild(div)


        }
    )

