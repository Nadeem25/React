import { combineReducers, createStore } from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCreams/iceCreamReducer'
import userReducer from './users/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: userReducer
})

export default rootReducer