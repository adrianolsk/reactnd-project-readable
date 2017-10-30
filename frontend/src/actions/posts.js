import * as API from '../util/api';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_POST = 'VOTE_POST';
export const SORT_POSTS = 'SORT_POST';
export const UPDATE_POST = 'UPDATE_POST';

//todo: remove console error and set the error to a state property

export function getPostsAsync() {
    return dispatch =>
        API.getAllPosts()
            .then(data => dispatch(getPosts(data)), error => console.error(error))
}

export function getPostsFromCategoryAsync(category) {
    return dispatch =>
        API.getAllPostsFromCategory(category)
            .then(data => dispatch(getPosts(data)), error => console.error(error))
}

function getPosts(data) {
    return {type: GET_POSTS, data}
}

export function getPostAsync(postId) {
    return dispatch =>
        API.getPost(postId)
            .then(data => dispatch(getPost(data)), error => console.error(error))
}

function getPost(data) {
    return {type: GET_POST, data}
}

export function deletePostAsync(postId) {
    return dispatch =>
        API.deletePost(postId)
            .then(data => dispatch(deletePost(postId)), error => console.error(error))
}

function deletePost(data) {
    return {type: DELETE_POST, data}
}

//todo: tratar erros
export function savePostsAsync(post) {
    return dispatch => (!post.id) ?
        API.create(post)
            .then(data => dispatch(createPosts(data)), error => console.error(error)) :
        API.update(post)
            .then(data => dispatch(updatePosts(data)), error => console.error(error))
}

export function createPostsAsync(post) {
    return dispatch =>
        API.create(post)
            .then(data => dispatch(createPosts(data)), error => console.error(error))
}

function createPosts(data) {
    return {type: CREATE_POST, data}
}


export function updatePostsAsync(post) {
    return dispatch =>
        API.update(post)
            .then(data => dispatch(updatePosts(data)), error => console.error(error))
}

function updatePosts(data) {
    return {type: UPDATE_POST, data}
}


export function votePostAsync(post, vote) {
    return dispatch =>
        API.votePost(post, vote)
            .then(data => dispatch(votePost(data)), error => console.error(error))
}

function votePost(data) {
    return {type: VOTE_POST, data}
}

export function sortPosts(field) {
    return {type: SORT_POSTS, field}
}