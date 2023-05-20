import React , { useState,useRef} from "react";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { getDatabase, ref} from "firebase/database"; 
import { createUserWithEmailAndPassword  } from "firebase/auth";
import {auth} from './config';


const StudentSignUp = () => {

  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(null);
  const database = getDatabase();

  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    console.log(inputRef.current?.files[0].name);
    inputRef.current?.files &&
      setUploadedFileName(inputRef.current.files[0].name);
  };
 

  

  const handleSubmit = (e) => {
    
    e.preventDefault();
     const {email, password  } = e.target.elements;
    console.log(email.value);
    console.log(password.value);
 
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    //SaveTeacherDetails(user, details,fullname);
    
    console.log('Successfully created new user:', user.uid);

  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });

  
 }

  
 
 return (
 <Container onSubmit={handleSubmit} >
  <main>
   <section>

   			<div className="signuplogo">
						Student Sign Up
					</div>
		  
   
 
    <div>

   <div>
    <Form backgroud-color='grey'>
    
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Student Full Name</Form.Label>
        <Form.Control name="fullname" type="text" placeholder="Enter your Name" />
        <Form.Text className="text-muted">
          We'll never share your name with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Enter Phone</Form.Label>
        <Form.Control name="phoneNumber" type="phone" placeholder="Enter phone" />
        <Form.Text className="text-muted">
          We'll never share your phone number with anyone else its for Admin Compliance reasons
        </Form.Text>
      </Form.Group>
      


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name= "password" type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEnterDateTime">
        <Form.Label>When would you like to start</Form.Label>
        <Form.Control name= "dob" type="date" placeholder="Enter DOB" />
      </Form.Group>



	  <Form.Group className="mb-3" controlId="formExp">
       <Form.Label>Enter Student Details of Langauge Learning </Form.Label>
   
        <textarea name="details" type="textarea" placeholder="Enter Details" rows={5} cols={80} />
        <Form.Text className="text-muted">
          We'll share highlights of your expereince to Students
        </Form.Text>
      </Form.Group>
 
 
	  
	  
	  <Button variant="primary" type="submit" >
        Save Data
      </Button>


    </Form>
    </div>    
  
    </div>
   </section>
   </main>
   </Container>

      );
}

export default StudentSignUp;