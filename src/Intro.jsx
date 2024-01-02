import './css/main.css';
import './css/util.css';

import React, { useContext  } from "react";

import { useNavigate } from "react-router-dom";
import {Button, Nav, Stack} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

import { signInWithEmailAndPassword } from "firebase/auth";  


const  Intro = () => {
const navigate = useNavigate();

const Proceed = () => {
      navigate("login/");


}

const ProceedToTeacherInfo = () => {
  navigate("signup/");


}


const ProceedToStudentInfo = () => {
  navigate("studentsignup/");


}

return (
<Stack gap={3}>
<Container>
     <Row>
		      <Col>
          <Button className="success"  onClick={ProceedToStudentInfo}>
							Student Sign Up
						</Button>
         		<Button className="primary"  onClick={Proceed}>
							Login
						</Button>
            <Button variant="info" onClick={ProceedToTeacherInfo}>Teacher Sign Up
            </Button> 
					</Col>
    </Row>
</Container>
  <Container>
     
    <Row>
    <Col>
       
        <img src="../../intro.png" width="400px" height="400px" />
     </Col>  
       <Col>
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
       </Col>

       </Row>
        
    </Container>        


  </Stack>
  
);


};

export default Intro;