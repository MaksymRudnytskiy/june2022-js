let url = new URL(location.href)

let id = url.searchParams.get('id')

let div = document.createElement('div')
div.classList.add('item')
document.body.appendChild(div)

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(posts => {
            for (const post of posts) {

                let divUserWrap = document.createElement('div')
                divUserWrap.classList.add('divUserWrap')
                div.appendChild(divUserWrap)

                let userID = document.createElement('p')
                userID.classList.add('userId')
                userID.innerHTML = `User Id: ${post.userId}`
                divUserWrap.appendChild(userID)

                let id = document.createElement('p')
                id.classList.add('id')
                id.innerHTML = `ID: ${post.id}`
                divUserWrap.appendChild(id)

                let title = document.createElement('p')
                title.classList.add('title')
                title.innerHTML = `Title: ${post.title}`
                divUserWrap.appendChild(title)

                let body = document.createElement('p')
                body.classList.add('body')
                body.innerHTML = `${post.body}`
                divUserWrap.appendChild(body)

                let divBtn = document.createElement('div')
                divBtn.classList.add('divBtn')
                divUserWrap.appendChild(divBtn)

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
                                title.classList.add('titleComment')
                                title.innerHTML = `Comments:`
                                divPost.appendChild(title)
                                for (const comment of comments) {

                                    let divComment = document.createElement('div')
                                    divComment.classList.add('divComment')
                                    title.appendChild(divComment)


                                    let postId = document.createElement('p')
                                    postId.classList.add('postIdComment')
                                    postId.innerHTML = `Post Id: ${comment.postId}`
                                    divComment.appendChild(postId)

                                    let id = document.createElement('p')
                                    id.classList.add('idComment')
                                    id.innerHTML = `Id: ${comment.id}`
                                    divComment.appendChild(id)

                                    let name = document.createElement('p')
                                    name.classList.add('nameComment')
                                    name.innerHTML = `Name: ${comment.name}`
                                    divComment.appendChild(name)

                                    let email = document.createElement('p')
                                    email.classList.add('emailComment')
                                    email.innerHTML = `Email: ${comment.email}`
                                    divComment.appendChild(email)

                                    let body = document.createElement('p')
                                    body.classList.add('bodyComment')
                                    body.innerHTML = `Body: ${comment.body}`
                                    divComment.appendChild(body)

                                }


                            }
                        )
                    divUserWrap.appendChild(divPost)
                }
                divBtn.appendChild(button)


            }


        }
    )
