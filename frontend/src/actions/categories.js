import * as API from '../util/api';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SET_CATEGORY = 'SET_CATEGORY';


export function getCategoriesAsync() {
    return dispatch =>
        API.getCategories()
            .then(data => dispatch(getCategories(data)), error => console.error(error))
}

function getCategories(data) {
    return {type: GET_CATEGORIES, data}
}
export function setCategory(data) {
    return {type: SET_CATEGORY, data}
}