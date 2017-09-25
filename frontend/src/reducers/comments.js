import {GET_COMMENTS} from "../actions/comments";

function comments(state = [], action) {
    debugger;
    switch (action.type) {
        case GET_COMMENTS:
            return action.data;

        default:
            return state;
    }
}

export default comments;
