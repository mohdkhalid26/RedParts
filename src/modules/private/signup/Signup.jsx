import React, { useState } from 'react'
import "./Signup.scss"
function Signup() {
    const [formData, setFormData] = useState({
    name:"",
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
        name:"",
        email:"",
        password:"",
        })
}

  return (
    <div className='signup'>
<form onSubmit={(e)=>formSubmit(e)}>
<input type="text" required onChange={(e)=>writeData(e)} value={formData.name} name='name' />
<input type="email" required onChange={(e)=>writeData(e)} value={formData.email} name='email'/>
<input type="text" required onChange={(e)=>writeData(e)} value={formData.password} name='password'/>
<button type="submit">SUBMIT</button>
</form>

    </div>
  )
}

export default Signup

// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyCPW8tCixXYgBKJjj9BQdXlEKvOW_vunF0",
//   authDomain: "red-parts-2001.firebaseapp.com",
//   projectId: "red-parts-2001",
//   storageBucket: "red-parts-2001.appspot.com",
//   messagingSenderId: "620291116962",
//   appId: "1:620291116962:web:01a31c6dfdb114b10f6cfb"
// };

// const app = initializeApp(firebaseConfig);