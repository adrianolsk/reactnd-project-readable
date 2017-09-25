import {CREATE_POST, GET_POSTS} from '../actions/posts';

function posts(state = [], action) {
    debugger;
    switch (action.type) {
        case GET_POSTS:
            return action.data;
        case CREATE_POST:
            return [...state, action.data];
        default:
            return state;
    }
}

export default posts;
