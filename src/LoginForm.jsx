import './css/main.css';
import './css/util.css';

import React, { useContext  } from "react";

import AuthContext from './AuthContext';
import { useNavigate } from "react-router-dom";
import {auth } from './config'; 


import { signInWithEmailAndPassword } from "firebase/auth";  


const  LoginForm = () => {
const navigate = useNavigate();
const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
  console.log(email.value);

signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
	 console.log(user);

	if (user.accessToken != null ) {
		let teacherId = user.uid;
        navigate(`/teachers/${teacherId}/`);
  };
	
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
	console.log(errorMessage);
  });


  };
  const  currentUserR  = useContext(AuthContext);
  if (currentUserR) {
	let teacherId = currentUserR.uid;
	navigate(`/teachers/${teacherId}/`);
  }
   return (

     <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-form-title">
					<span className="login100-form-title-1">
						Sign In
					</span>
				</div>

				<form className="login100-form validate-form" onSubmit={handleSubmit}>
					<div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
						<span className="label-input100">Username</span>
						<input className="input100" type="text" name="email" placeholder="Enter username"/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
						<span className="label-input100">Password</span>
						<input className="input100" type="password" name="password" placeholder="Enter password"/>
						<span className="focus-input100"></span>
					</div>

					<div className="flex-sb-m w-full p-b-30">
						<div className="contact100-form-checkbox">
							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
							<label className="label-checkbox100">
								Remember me
							</label>
						</div>

						
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>

   );



 



}
export default LoginForm;