import React, { useReducer } from 'react'
import ComponentB from '../../Hooks/Context-Reducer/ComponentB';
import ComponentC from '../../Hooks/Context-Reducer/ComponentC';
import ComponentA from '../../Hooks/Context-Reducer/ComponentA';

export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increament':
            return state + 1
        case 'decreament':
            return state - 1
        case 'reset':
            return initialState
    }
}

function CounterComp() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
            <div>
                <div>
                    Count-{count}
                </div>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider>

    )
}

export default CounterComp
