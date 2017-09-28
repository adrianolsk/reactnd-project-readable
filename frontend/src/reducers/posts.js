import {orderBy} from "lodash";
import {CREATE_POST, GET_POSTS, SORT_POSTS} from '../actions/posts';


function posts(state = {
    list: [],
    sortBy: {
        field: 'timestamp',
        direction: 1
    },
}, action) {

    switch (action.type) {

        case GET_POSTS:
            return {
                ...state,
                list: action.data
            };

        case CREATE_POST:
            return {
                ...state,
                list: [...state.list, action.data]
            }

        case SORT_POSTS:
            let direction = action.field !== state.sortBy.field ? 1 : state.sortBy.direction * -1;

            return {
                list: orderBy([...state.list], [action.field], [direction === 1 ? 'asc' : 'desc']),
                sortBy: {
                    field: action.field,
                    direction
                }
            };
        default:
            return state;
    }
}

export default posts;
