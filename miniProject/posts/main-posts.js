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

                let button = document.createElement('button')
                button.classList.add('button')
                button.innerText = 'comments of current post'
                button.onclick = () => {

                    let divPost = document.createElement('div')
                    divPost.classList.add('divPost')

                    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                        .then(response => response.json())
                        .then(comments => {
                                let title = document.createElement('p')
                                title.classList.add('title')
                                title.innerHTML = `Comments:`
                                divPost.appendChild(title)
                                for (const comment of comments) {


                                    let postId = document.createElement('p')
                                    postId.classList.add('postId')
                                    postId.innerHTML = `Post Id: ${comment.postId}`
                                    title.appendChild(postId)

                                    let id = document.createElement('p')
                                    id.classList.add('id')
                                    id.innerHTML = `Id: ${comment.id}`
                                    title.appendChild(id)

                                    let name = document.createElement('p')
                                    name.classList.add('name')
                                    name.innerHTML = `Name: ${comment.name}`
                                    title.appendChild(name)

                                    let email = document.createElement('p')
                                    email.classList.add('email')
                                    email.innerHTML = `Email: ${comment.email}`
                                    title.appendChild(email)

                                    let body = document.createElement('p')
                                    body.classList.add('body')
                                    body.innerHTML = `Body: ${comment.body}`
                                    title.appendChild(body)

                                }


                            }
                        )
                    div.appendChild(divPost)
                }
                div.appendChild(button)

                document.body.appendChild(div)
            }


        }
    )
