import React from 'react'
import { useNavigate } from 'react-router-dom'

function Pricing() {
  const navigate = useNavigate()
  return (
    <div>
      <p onClick={()=>{navigate("signup")}}>Signup</p>
      <p onClick={()=>{navigate("login")}}>login</p>
      <p onClick={()=>{navigate("buyplan")}}>buyplan</p>
      <p onClick={()=>{navigate("currentplan")}}>currentplan</p>
      <p onClick={()=>{navigate("orderdetails")}}>orderdetails</p>
    </div>
  )
}

export default Pricing
