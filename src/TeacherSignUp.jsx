import React , { useState,useRef  } from "react";
import { Container ,Stack} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {auth} from './config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  useNavigate ,useParams } from 'react-router-dom';


const TeacherSignUp = () => {

  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(null);
 
  const navigate = useNavigate();
  const teacherInfo = useParams();

 // we don't need to filter by id just show all teachers
const uuid = teacherInfo.teacherId;

  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    console.log(inputRef.current?.files[0].name);
    inputRef.current?.files &&
      setUploadedFileName(inputRef.current.files[0].name);
  };
 


  const onSubmit = (e) => {
    e.preventDefault()
    const {email, password  } = e.target.elements;
   
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/")
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
      });

 
  }

  const handleSignUp = (e) => {
    
    e.preventDefault();
     const {email, password  } = e.target.elements;
    console.log(email.value);
    console.log(password.value);
 
   
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
    console.log(user);
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

  
 
 return (
 <Container>

 
   <Stack gap={3}>
   			<Container className="signuplogo">
						Teacher Sign Up
            
					</Container>
		  
   <label>We need additional information to enroll you as teaacher</label>

    

    <Form backgroud-color='grey' onSubmit={onSubmit}>
    
  
      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Enter Phone</Form.Label>
        <Form.Control name="phoneNumber" type="phone" placeholder="Enter phone" />
        <Form.Text className="text-muted">
          We'll never share your phone number with anyone else its for Admin Compliance reasons
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formEnterDateTime">
        <Form.Label>Enter Date Time</Form.Label>
        <Form.Control name= "dob" type="date" placeholder="Enter DOB" />
      </Form.Group>



	  <Form.Group className="mb-3" controlId="formExp">
       <Form.Label>Enter Teachers Experience Details </Form.Label>
   
        <textarea name="details" type="textarea" placeholder="Enter Details" rows={5} cols={80} />
        <Form.Text className="text-muted">
          We'll share highlights of your expereince to Students
        </Form.Text>
      </Form.Group>
 
 
	  
	  
	  <Button variant="primary" type="submit" >
        Save Data
      </Button>


    </Form>
 
    </Stack>
   </Container>

      );
}

export default TeacherSignUp;