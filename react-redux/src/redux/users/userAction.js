import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    console.log(`Inside fetchUsers()`);
    return (dispatch) => {;
        dispatch(fetchUserRequest)
        console.log(`Called Fetch User Request Dispatch`);
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const users = response?.data
            dispatch(fetchUserSuccess(users))
            console.log(`Called Fetch User Success Dispatch`);
        }).catch((error)=> {
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
            console.log(`Called Fetch User Failure Dispatch`);
        })
    }
}