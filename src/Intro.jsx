import './css/main.css';
import './css/util.css';

import React, { useContext  } from "react";

import AuthContext from './AuthContext';
import { useNavigate } from "react-router-dom";
import {auth } from './config'; 
import {Nav} from 'react-bootstrap';


import { signInWithEmailAndPassword } from "firebase/auth";  


const  Intro = () => {
const navigate = useNavigate();

const Proceed = () => {
      navigate("login/");


}

return (

  <div className="container">
     
     <div className="row">
		      <div className="col">
          <button className="btn btn-primary">
							Sign Up
						</button>
			
      			<button className="btn btn-primary"  onClick={Proceed}>
							Login
						</button>
					</div>
    </div>
    <div className="row">
    <div className="col">
       
        <img src="../../intro.png" width="400px" height="400px" />
       </div> 
       <div className="col">
           <label> Determination and untiring efforts to achieve our goals by using great technology and tools suits for your business and functional requirements. 
           <label> This platform will provide educational courses , the unique feature is you can communicate with your instructor without knowing his language by just using microphone or text . </label> 
           
            <p> We are new but we have synergy to deliver to customer. </p>  
            <p> Implmentation using Advanced technology Stack </p>
            <p> Microsoft .Net Stack </p>
            <p> Google Cloud Stack with Realtime Database</p>
          </label>
           <Nav>
            <Nav.Item>
            <Nav.Link href="https://http.bluemachines-inc.com/" > Company Site </Nav.Link> 
         
            </Nav.Item>
           </Nav>
       </div>

       </div>
   
    </div>        

);


};

export default Intro;