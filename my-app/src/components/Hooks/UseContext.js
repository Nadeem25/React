import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../../App'

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
