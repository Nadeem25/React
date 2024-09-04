const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers


const BUY_CAKE= 'BUY_CAKE'
const BUY_ICE_CREAM = "BUY_ICE_CREAM"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICE_CREAM,
        info: 'First Redux Action'
    }
}

const initialCakeState = {
    numOfCake: 10
}

const initialIceCreamState = {
    numOfIceCream: 20
}


const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake - 1
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default:
            return state
    }
}

const rootReducer = combineReducer({
    iceCream: iceCreamReducer,
    cake: cakeReducer
})

// 1. Create Store: Hold Application State
const store = createStore(rootReducer)

// 2. Allow access to state via getState()
console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// 4.  Register listener via subscribe(listener)
const unsubscribe = store.subscribe(() => console.log('Updated State: ', store.getState()))

// 3. Allow state to be updated via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())

// 5. Handle unregistering of listeners via the function returned by subscribe(listener)
unsubscribe()