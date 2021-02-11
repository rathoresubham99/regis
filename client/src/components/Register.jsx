import React, {useEffect, useState} from 'react'
import './register.css'
import $ from 'jquery'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import Aos from 'aos'

export default function Register() {
  useEffect(()=>{
    Aos.init({
      duration:1000,
     
    })
   },[])
const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
    password2: ""
  })

  const checkValidation=()=>{
      const patterns={
        name : /^[a-zA-Z0-9]{5,20}$/,
        email : /^([a-zA-Z0-9_\.-]+)@([a-z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        password : /^(?=.*[a-z])^(?=.*[A-Z])^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,25}$/,
   
      }

      if(!patterns.email.test(state.email)){
        //  console.log('Email is not valid');
        $("#email_error").html("Email is not valid! (eg. test@abc.com)");
      }
      else{
        $("#email_error").html("");
      }
      var mail=$('#email').val()
      if(mail==="")
      {
        $("#email_error").html("")
      }
      
      if(state.username.length !=0){
        if(!patterns.name.test(state.username)){
          //  console.log('Username is not valid');
          $("#username_error").html("Username should consist of only alphabets and be 5-20 chars long");
        }else{
          $("#username_error").html("");
        }
      }
      var user=$('#username').val()
      if(user==="")
      {
        $("#username_error").html("")
      }
    
    if(state.password.length>0 && !patterns.password.test(state.password)){
        //  console.log('password is not valid');
        $("#pass_error").html("8-25 char long, must include atleast one Uppercase,one lowercase,one digit and one character from !@#$%^&*");
      }else{
        $("#pass_error").html("");
      }
      var passw=$('#password').val()
    if(passw==="")
    {
      $("#pass_error").html("")
    }
  }
  const checkPasswordMatch = ()=>{
    
    if(state.password.length != 0 && state.password2.length !=0){
      if(state.password != state.password2){
        $("#divCheckPasswordMatch").html("Passwords do not match!");
      }else{
        $("#divCheckPasswordMatch").html("");
      }
    }
    var passwd=$('#cpassword').val()
    if(passwd==="")
    {
      $("#divCheckPasswordMatch").html("")
    }    
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
        ...prevState,
        [id]: value,
    }))
}
const payloadData = {
  "username": state.username,
  "email": state.email,
  "password": state.password,
 
}  
const sendDetailsToServer=()=>{
   axios.post('http://localhost:3001/create', payloadData)
}
  
  const handleClick = (e) => {
    e.preventDefault()
    var cpass=document.getElementById('password2').value;
    
    if(state.password!==cpass)
    {
      alert("Passwords do not match!!!")
    }
    else{
      sendDetailsToServer()
      alert("Data has been Recorded!")
    }
  }
    return (
        <>
        <div class="container body1">
	<div class="header">
		<h2>Register yourself</h2>
   
	</div>
	<form id="form" class="form" onSubmit={handleClick} data-aos="zoom-in" data-aos-once="false">
		<div class="form-control" data-aos="zoom-in" data-aos-once="false">
			<label for="username">Username</label>
			<input type="text"
             placeholder="Enter Your Username" 
             id="username" 
             name="username"
             value={state.username}
             onKeyUp={checkValidation()}
             onChange={handleChange}
             required
             />
				<div class="registrationFormAlert passprompt pwd" id="username_error">
                                </div>
            
		</div>
		<div class="form-control">
			<label for="username">Email</label>
			<input type="email" 
            value={state.email}
            name="email"
            placeholder="abc@xyz.com" 
            id="email"
            onKeyUp={checkValidation()} 
            onChange={handleChange}
            required
            />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<div class="registrationFormAlert passprompt pwd" id="email_error">
                                </div>
		</div>
		<div class="form-control">
			<label for="username">Password</label>
			<input type="password" 
            placeholder="Password" 
            name="password"
            value={state.password}
            id="password"
            onKeyUp={checkValidation()}
            onChange={handleChange}
            required
            />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
            <div class="registrationFormAlert passprompt pwd" id="pass_error">
                                </div>
		</div>
		<div class="form-control">
			<label for="username">Confirm Password</label>
			<input type="password" 
            placeholder="Confirm Password" 
            id="password2"
            onChange={handleChange}
            onKeyUp={checkPasswordMatch()}
            required
            />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<div class="registrationFormAlert passprompt pwd" id="divCheckPasswordMatch">
      </div>
		</div>
		<button type="submit">Submit</button>
	</form>
  <div className="head-1">
  <NavLink to="/view"><button type="submit">Click here to fetch updated records</button></NavLink>
  </div>
</div>

        </>
    )
}
