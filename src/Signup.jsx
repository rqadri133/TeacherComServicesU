import React , {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {auth}  from './config';
import { Container } from 'react-bootstrap';
 
const Signup = () => {

    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
 
    const onSubmit = (e) => {
      e.preventDefault()
     
      

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.uid);
            const userId = user.uid;

            navigate(`/teachersignup/${userId}`);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <Container>

    <main >        
        <section>
            <div>
            <div className="signuplogo">
						Teacher Sign Up
					</div>
		  
   
                <div>                  
                    <form>                                                                                            
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             

                 

                        <button className='btn btn-primary'
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>                   
                </div>
            </div>
        </section>
    </main>
    </Container>
  
  )
}
 
export default Signup
