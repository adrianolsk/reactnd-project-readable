import {GET_CATEGORIES} from '../actions/categories';

function categories(state = [], action) {

    switch (action.type) {
        case GET_CATEGORIES:
            return action.data;
        default:
            return state;
    }
}

export default categories;
