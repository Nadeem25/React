import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes";

const initialUserState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            console.log(`Inside userReducer() FETCH_USER_REQUEST`);
            return {
                ...state,
                loading: true
            }

        case FETCH_USER_SUCCESS:
            console.log(`Inside userReducer() FETCH_USER_SUCCESS`);
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
            console.log(`Inside userReducer() FETCH_USER_FAILURE`);
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer