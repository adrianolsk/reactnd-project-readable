import {findIndex} from 'lodash'
import {GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT, VOTE_COMMENT, UPDATE_COMMENT} from "../actions/comments";

function comments(state = [], action) {

    switch (action.type) {
        case GET_COMMENTS:
            let parentId = 0;
            if (action.data.length > 0) {
                parentId = action.data[0].parentId;
            }
            return [...state.filter(x => x.parentId !== parentId), ...action.data];

        case ADD_COMMENT:
            return [...state, action.data];


        case UPDATE_COMMENT: {
            // slice before and after the voted comment to keep the position
            debugger;
            let index = findIndex(state, item => item.id === action.data.id)

            return [
                ...state.slice(0, index),
                {...action.data},
                ...state.slice(index + 1)
            ]

        }

        case DELETE_COMMENT:
            return [...state.filter(item => item.id !== action.data.id)];

        case VOTE_COMMENT:
            // slice before and after the voted comment to keep the position
            let index = findIndex(state, item => item.id === action.data.id)
            return [
                ...state.slice(0, index),
                {...action.data},
                ...state.slice(index + 1)
            ];

        default:
            return state;
    }
}

export default comments;
