import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../../App'


// It is use to pass the data through the component tree (sub Component) without having to pass props manually to every level.
// Step 1: Create the Contex 
// Step 2: Provide the value
// Step 3: Consume the context Value
function UseContext() {
    const userContext = useContext(UserContext)
    const channelContext = useContext(ChannelContext)

  return (
    <div>
      {userContext} -{channelContext}
    </div>
  )
}

export default UseContext
