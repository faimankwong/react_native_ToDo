import * as types from './actionTypes';
export function Firstname(text) {
    return {
        type: types.type_firstname,
        text
    }

}
export function Lastname(text) {
    return {
        type: types.type_lastname,
        text
    }

}
export function Company(text) {
    return {
        type: types.type_company,
        text
    }

}
export function Department(text) {
    return {
        type: types.type_department,
        text
    }

}
export function Positions(text) {
    return {
        type: types.type_position,
        text
    }

}
export function Email(text) {
    return {
        type: types.type_email,
        text
    }

}


