import {GET_CATEGORIES, SET_CATEGORY} from '../actions/categories';

function categories(state = {
    list: [],
    current: ''
}, action) {

    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                list: action.data
            };
            case SET_CATEGORY:
            return {
                ...state,
                current: action.data
            };
        default:
            return state;
    }
}

export default categories;
