import { BUY_ICE_CREAM } from "./iceCreamTypes"

const initialIceCreamState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    // console.log(`Inside cake reducer`);
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state
    }
}

export default iceCreamReducer
