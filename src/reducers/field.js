import * as types from '../actions/actionTypes';

//prevent the first time error
//prevent the first time error




const initialState = {
    new_first_name: '',
    new_last_name: '',
    new_company: '',
    new_department: '',
    new_position: '',
    new_email: ''
}


export default function field(state=initialState  , action = {}) {

    switch (action.type) {
        case types.type_firstname:
            console.log(JSON.stringify(action));
            return {
                ...state,
                new_first_name: action.text
            };
        case types.type_lastname:
            console.log(JSON.stringify(action));
            return {
                ...state,
                new_last_name: action.text
            };

        case types.type_company:
            console.log(JSON.stringify(action));
            return {
                ...state,
                new_company: action.text
            };

        case types.type_department:
            console.log(JSON.stringify(action));
            return {
                ...state,
                new_department: action.text
            };

        case types.type_position:
            console.log(JSON.stringify(action));
            return {
                ...state,
                new_position: action.text
            };
        case types.type_email:
            console.log(JSON.stringify(action));
            return {
                ...state,
                new_email: action.text
            };


        default:
            return state;
    }
}


