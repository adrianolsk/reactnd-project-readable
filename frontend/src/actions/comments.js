import * as API from '../util/api';

export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';


export function getCommentsAsync(postId) {
    return dispatch =>
        API.getPostComments(postId)
            .then(data => dispatch(getComments(data)), error => console.error(error))
}

function getComments(data) {
    return {type: GET_COMMENTS, data}
}


export function addCommentAsync(comment) {

    return dispatch => (!comment.id) ?
        API.addComment(comment)
            .then(data => dispatch(addComment(data)), error => console.error(error)) :
        API.updateComment(comment)
            .then(data => dispatch(updateComment(data)), error => console.error(error))
}

function addComment(data) {
    return {type: ADD_COMMENT, data}
}

function updateComment(data) {
    return {type: UPDATE_COMMENT, data}
}


export function deleteCommentAsync(comment) {
    return dispatch =>
        API.deleteComment(comment)
            .then(data => dispatch(deleteComment(data)), error => console.error(error))
}

function deleteComment(data) {
    return {type: DELETE_COMMENT, data}
}


export function voteCommentAsync(comment, vote) {
    return dispatch =>
        API.voteComment(comment, vote)
            .then(data => dispatch(voteComment(data)), error => console.error(error))
}

function voteComment(data) {
    return {type: VOTE_COMMENT, data}
}
