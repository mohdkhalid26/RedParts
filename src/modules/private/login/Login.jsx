import React, { useState } from 'react'
import "./Login.scss"
function Login() {
  const [formData, setFormData] = useState({
    email:"",
    password:"",
    });

function writeData(e) {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({
        ...formData,[name]:value,
    })
}

function formSubmit(e) {
    e.preventDefault()
    setFormData({
        email:"",
        password:"",
        })
}

  return (    <div className='login'>
  <form onSubmit={formSubmit}>
  <input type="email" required onChange={writeData} value={formData.email} name='email'/>
  <input type="text" required onChange={writeData} value={formData.password} name='password'/>
  <button type="submit">SUBMIT</button>
  </form>
  
      </div>
  
  )
}

export default Login