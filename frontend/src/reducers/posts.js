import {GET_POSTS} from '../actions/posts';

function posts(state = [], action) {
    debugger;
    switch (action.type) {
        case GET_POSTS:
            return action.data;
        default:
            return state;
    }
}

export default posts;
