import React from 'react'
import { useNavigate } from 'react-router-dom'

function Pricing() {
  const navigate = useNavigate()
  return (
    <div>
      <p onClick={()=>{navigate("signup")}}>Signup</p>
    </div>
  )
}

export default Pricing
