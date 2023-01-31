// This form has been copied from React but you can modify as per your need a
// and requirement 
import './css/main.css';
import './css/util.css';

import {React, useState , Redirect} from 'react' 
import firebaseConfig from '../config';

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);    
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);      
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
      return <Redirect to="/teachers" />;
  }
  return (
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-form-title">
					<span className="login100-form-title-1">
						Sign Up
					</span>
				</div>

				<form className="login100-form validate-form"  onSubmit={handleSubmit}>
					<div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
						<span className="label-input100">Email</span>
						<input className="input100" type="text" name="email" placeholder="Enter username"/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
						<span className="label-input100">Password</span>
						<input className="input100" type="password" name="pass" placeholder="Enter password"/>
						<span className="focus-input100"></span>
					</div>

				
					<div className="container-login100-form-btn">
						<button className="login100-form-btn" type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>

    
  );
};

export default SignUp;