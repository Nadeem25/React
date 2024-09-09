import React, { useState } from 'react'
import { useAuth } from './auth'
import { replace, useNavigate } from 'react-router-dom'

function Login() {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogin = () => {
        auth.login(user)
        navigate('/', {replace: true})
    }
  return (
    <div>
      <label>
        Username: {' '}
        <input type='text' onChange={e => setUser(e.target.value)}></input>
        <button onClick={handleLogin}>Login</button>
      </label>
    </div>
  )
}

export default Login
