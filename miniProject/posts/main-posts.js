let url = new URL(location.href)

let id = url.searchParams.get('id')

// let users = url.searchParams.get('users')

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let div = document.createElement('div')
            div.classList.add('item')

            let userID = document.createElement('p')
            userID.classList.add('userId')
            userID.innerHTML = `User Id: ${post.userId}`
            div.appendChild(userID)

            let id = document.createElement('p')
            id.classList.add('id')
            id.innerHTML = `ID: ${post.id}`
            div.appendChild(id)

            let title = document.createElement('p')
            title.classList.add('title')
            title.innerHTML = `Title: ${post.title}`
            div.appendChild(title)

            let body = document.createElement('p')
            body.classList.add('body')
            body.innerHTML = `${post.body}`
            div.appendChild(body)

            // let a = document.createElement('a')
            // a.classList.add('button')
            // a.innerText = 'Details'
            // a.href = `posts/post-details.html?id=${user.id}`
            // div.appendChild(a)

            document.body.appendChild(div)
        }


        }
    )
