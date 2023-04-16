import React , {useEffect ,useContext , useState,useRef} from "react";
import {getAuth}  from "firebase/auth";
import { Container ,Stack} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const TeacherSignUp = () => {

  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(null);
  const auth = getAuth();
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
     const { fullname ,email, password ,details ,phoneNumber } = e.target.elements;
    console.log(email.value);
 
  auth
  .createUser({
    email: email.value,
    emailVerified: false,
    phoneNumber: phoneNumber.value ,
    password: password.value,
    displayName: fullname.value,
    photoURL: uploadedFileName,
    disabled: false,
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });
  
 }

  
 
 return (

   <Stack gap={3}>
   			<Container className="signuplogo">
						Teacher Sign Up
					</Container>
		
   <Container>
   
    <Form backgroud-color='grey'  onSubmit={handleSubmit}>
    
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
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


	  <Form.Group className="mb-3" controlId="formExp">
       <Form.Label>Enter Teachers Expereince Details </Form.Label>
   
        <textarea name="details" type="textarea" placeholder="Enter Details" rows={5} cols={80} />
        <Form.Text className="text-muted">
          We'll share highlights of your expereince to Students
        </Form.Text>
      </Form.Group>
 
 
      <Form.Group className="mb-3" controlId="formUploadImage">
      <Form.Label>Upload Image </Form.Label>
      <Form.Control  ref={inputRef}
        onChange={handleDisplayFileDetails}
        className="d-none"
      name= "currentfile" type="file" placeholder="UploadFile" />
      <button
        onClick={handleUpload}
        className={`btn btn-outline-${
          uploadedFileName ? "success" : "primary"
        }`}
      >
        {uploadedFileName ? uploadedFileName : "Upload"}
      </button>
    </Form.Group>
 
	  
	  
	  <Button variant="primary" type="submit">
        Submit
      </Button>


    </Form>

   </Container>
   </Stack>

      );
}

export default TeacherSignUp;