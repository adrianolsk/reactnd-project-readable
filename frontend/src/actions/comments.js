import * as API from '../util/api';

export const GET_COMMENTS = 'GET_COMMENTS';


export function getCommentsAsync(postId) {
    return dispatch =>
        API.getPostComments(postId)
            .then(data => dispatch(getComments(data)), error => console.error(error))
}

function getComments(data) {
    return {type: GET_COMMENTS, data}
}