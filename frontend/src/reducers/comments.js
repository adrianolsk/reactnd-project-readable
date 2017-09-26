import {GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT, VOTE_COMMENT} from "../actions/comments";

function comments(state = [], action) {

    switch (action.type) {
        case GET_COMMENTS:
            return action.data;

        case ADD_COMMENT:
            return [...state, action.data];

        case DELETE_COMMENT:
            return [...state.filter(item => item.id !== action.data.id)];

        case VOTE_COMMENT:
            //todo: avoid change comment position
            return [...state.filter(item => item.id !== action.data.id), action.data]

        default:
            return state;
    }
}

export default comments;
