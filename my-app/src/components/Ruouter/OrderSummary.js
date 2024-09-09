import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
    const navigate = useNavigate()
  return (
    <div>
      Order Confirmed !
      <button onClick={()=> navigate(-1)}>Back Button</button>
    </div>
  )
}

export default OrderSummary
