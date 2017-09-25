import * as API from '../util/api';

export const GET_CATEGORIES = 'GET_CATEGORIES';


export function getCategoriesAsync() {
    return dispatch =>
        API.getCategories()
            .then(data => dispatch(getCategories(data)), error => console.error(error))
}

function getCategories(data) {
    return {type: GET_CATEGORIES, data}
}