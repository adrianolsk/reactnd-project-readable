import {CREATE_POST, GET_POST, GET_POSTS, VOTE_POST} from '../actions/posts';

function post(state = {}, action) {
    debugger;
    switch (action.type) {
        case GET_POST:
            return action.data;

        case VOTE_POST:
            return action.data;

        default:
            return state;
    }
}

export default post;
