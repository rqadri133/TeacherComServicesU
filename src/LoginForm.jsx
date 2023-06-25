import './css/main.css';
import './css/util.css';

import React, { useContext  ,useState } from "react";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";

import AuthContext from './AuthContext';
import { useNavigate } from "react-router-dom";
import {auth } from './config'; 

import {Button} from 'react-bootstrap';
import { GoogleLogin } from '@react-oauth/google';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword , updateProfile } from "firebase/auth";  


const  LoginForm = () => {

const [loading, setLoading] = useState(true);
const [currentErrorMessage,setErrorMessage] = useState('');

const navigate = useNavigate();
const localid = "1vlXRxopDGNTzJgtPBy53PoUHDj1";
// global id is local id

const provider = new FacebookAuthProvider();


const loginFaceBook = (e) => {

	signInWithPopup(auth, provider)
	.then((result) => {
	  // The signed-in user info.
	  const user = result.user;
  
	  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
	  const credential = FacebookAuthProvider.credentialFromResult(result);
	  const accessToken = credential.accessToken;
	  navigate(`/teachers/${accessToken}` );
  
  
	  // IdP data available using getAdditionalUserInfo(result)
	  // ...
	})
	.catch((error) => {
	  // Handle Errors here.
	  const errorCode = error.code;
	  this.currentErrorMessage = "Unable to Login Facebook User ID Password or Credentials Not matched";
	  console.log(errorCode);
	  const errorMessage = error.message;
	  // The email of the user's account used.
	  const email = error.customData.email;
	  // The AuthCredential type that was used.
	  const credential = FacebookAuthProvider.credentialFromError(error);

	  // ...
	});

}

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
		const teacherId = user.uid;
        navigate(`/teacherslist/${teacherId}` );

  };
	
    // ...
  })
  .catch((error) => {

    const errorMessage = error.message;
	setErrorMessage('Unable to Login User ID password Not correct');

	console.log(errorMessage);
  });


  };

  const onSubmit = (e) => {
	e.preventDefault();
	e.preventDefault();
    const { email, password  } = e.target.elements;
  console.log(email.value);
  
	if (email &&  password) {
	  registerUser(email,  password).then(() => {
		console.log("User created")
	  })
	};
  };
  
  
  const registerUser = async (email,  password) => {
	try {
	  console.log("> Registering user")
      setLoading(true);
	  const {
		user
	  } = await createUserWithEmailAndPassword(auth, email, password)
  
	  console.log("> Updating profile")

	  await updateProfile(user, {
		displayName: "heu josu",
	  });
  
	  window.location.pathname = `/subscriptions`;
	} catch (e) {
	  console.log(e)
	}
    setLoading(false);
  }
  


  const handleSubmitNew = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
  console.log(email.value);
  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage  );
	console.log(errorCode);
	
	// ..
  });


  }

  const  currentUserR  = useContext(AuthContext);
  if (currentUserR) {
	let teacherId = currentUserR.uuid;
	navigate(`/teachers/${teacherId}/`);
  }

  const responseMessage = (response) => {
	if(response)
	{
	 navigate(`/teachers/${localid}`)
	}
	console.log(response);
};
const errorMessage = (error) => {
	console.log(error);
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
					<div className='p-danger'>
                        <h4>{currentErrorMessage}</h4>						
					</div> 
			   
					<div className="container-login100-form-btn">
				
					<div className="container-login100-form-btn">
				   
					   <Button variant="success" type='submit'>Submit</Button>
		               
		        	 </div>
					
					 &nbsp;
					 &nbsp;
					 Or
	
					 &nbsp;
					 &nbsp;
					 &nbsp;
					 &nbsp;
					 &nbsp;
					 &nbsp;
					<div className="container-login100-form-btn">
				       
						<Button type="button" variant="dark">Apple Login</Button> 
						<b></b>
					</div>
	
					 &nbsp;
					 &nbsp;
					 &nbsp;
					 &nbsp;
					 	
				    <div className="container-login100-form-btn">
					<GoogleLogin onSuccess={responseMessage} onError={currentErrorMessage} />
                   </div>		

					&nbsp;
					 &nbsp;
					 &nbsp;
					 &nbsp;
					 	
				    <div type="button" className="container-login100-form-btn">
				
						<Button onClick={loginFaceBook} variant="primary">Facebook Login</Button>
				    </div>		

					</div>
				</form>
			</div>
		</div>
	</div>

   );



 



}
export default LoginForm;