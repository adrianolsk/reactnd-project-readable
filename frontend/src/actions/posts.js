import * as API from '../util/api';

export const GET_POSTS = 'GET_POSTS';


export function getPostsAsync() {
    return dispatch =>
        API.getAllPosts()
            .then(data => dispatch(getPosts(data)), error => console.error(error))
}

function getPosts(data) {
    return {type: GET_POSTS, data}
}