import * as API from '../util/api';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_POST = 'VOTE_POST';

//todo: remove console error and set the error to a state property

export function getPostsAsync() {
    return dispatch =>
        API.getAllPosts()
            .then(data => dispatch(getPosts(data)), error => console.error(error))
}

function getPosts(data) {
    return {type: GET_POSTS, data}
}


export function createPostsAsync(post) {
    return dispatch =>
        API.create(post)
            .then(data => dispatch(createPosts(data)), error => console.error(error))
}

function createPosts(data) {
    return {type: CREATE_POST, data}
}