import {findIndex, orderBy} from "lodash";
import {CREATE_POST, GET_POSTS, SORT_POSTS, UPDATE_POST} from '../actions/posts';


function posts(state = {
    list: [],
    post: {},
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

        case UPDATE_POST:

            // slice before and after the voted comment to keep the position
            let index = findIndex(state.list, item => item.id === action.data.id)

            return {
                ...state,
                list: [
                    ...state.list.slice(0, index),
                    {...action.data},
                    ...state.list.slice(index + 1)
                ]
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


        case GET_POST:
            return {
                ...state,
                post: {...action.data}
            };

        case DELETE_POST:
            debugger
            return {
                ...state,
                list: [...state.list.filter(x=>x.id !== action.data)]
            };

        case VOTE_POST:

            let index = findIndex(state.list, item => item.id === action.data.id);
            return {
                ...state,
                list: [
                    ...state.list.slice(0, index),
                    {...action.data},
                    ...state.list.slice(index + 1)
                ],
                post: {...action.data}
            };


        default:
            return state;
    }
}

export default posts;
