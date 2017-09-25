const api = "http://localhost:3001"


let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token,
    'Content-Type': 'application/json'
}

export const getCategories = () =>
    fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(data => data.categories)

export const getAllPosts = () =>
    fetch(`${api}/posts`, {headers})
        .then(res => res.json())

export const getAllPostsFromCategory = (category) =>
    fetch(`${api}/${category}/posts`, {headers})
        .then(res => res.json())

export const getPost = (postId) =>
    fetch(`${api}/posts/${postId}`, {headers})
        .then(res => res.json())

export const getPostComments = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, {headers})
        .then(res => res.json())


export const deletePost = (postId) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'DELETE',
        headers: headers
    }).then(res => res.json())
        .then(data => data.books)


export const create = (post) => {
    const newPost = {...post, id: Date.now().toString(), timestamp: Date.now()};

    return fetch(`${api}/posts`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(newPost)
    }).then(res => res.json())
}

export const search = (query, maxResults) =>
    fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query, maxResults})
    }).then(res => res.json())
        .then(data => data.books)