import React , { useState,useRef  } from "react";
import { Container ,Stack} from 'react-bootstrap';
import {NavLink,  useNavigate ,useParams } from 'react-router-dom';
import { getDatabase, ref, set} from "firebase/database";
import Panel from "./Panel";
import { useMemo } from 'react'
import Select from 'react-select'
import {auth}  from './config';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import ReactLanguageSelect from 'react-languages-select';
 
//import css module


import countryList from 'react-select-country-list'



const StudentSignUp = () => {


  
  const [phoneNumber, setPhone] = useState('');
    const [details, setDetails] = useState('');
    const [starttimeof, setTime] = useState('');
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [langaugeCode , setLanguage] = useState('');
    const [uuid , setUID] = useState('');    
    
    const [countrycodesel, setCountryCode] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  


 
  const navigate = useNavigate();

 // we don't need to filter by id just show all teachers

const database = getDatabase();




 
  
 
const onSelectLanguage = (languageCode) => {
    setLanguage(langaugeCode);
}
  
  const OnSubmit = (e) => {
    e.preventDefault();
    var umid = '' ;
       
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
      const user = userCredential.user;
       umid = user.uid;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
    });

    setUID(umid);
    console.log(uuid);
   
   
    //const {  phoneNumber , details ,starttimeof  } = e.target.elements;
    console.log (phoneNumber);
    
     
    //const usersRef = ref(database, '/Teacher/'  );
     // example set for new firebase version improved ....    
     // Continue      
     
   // var current = modelData[keym];
     set(ref(database, '/Student/' + uuid ), 
      {
        CreatedBy : '',
        CreatedDate: '',
        studentClassificationID: 11,
        StudentName : name,
        Phone: phoneNumber ,
        WhatToLearn : details,
        StartDate : starttimeof,
        UID: uuid,
        CountryCode: countrycodesel,
        PreferedLanguage: langaugeCode,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/cubmessenger.appspot.com/o/fcIuzRj0uATpOm5Rb8HL4bbiRB03%2F613433863438.jpg?alt=media&token=542ad057-2856-45d1-9420-393989dd7fe5"
      }
      
  );
  navigate("/login");
    //console.log(usersRef);

  


  }


  const changeCountryCode = value => {
    setCountryCode(value)
  }


  
 
 return (
 <Container>

 
   <Stack gap={3}>
		  
<Container>

<main >        
    <section>
      <div>  
        <div className="signuplogo">
        Student Sign Up
      </div>
      
            
       <Panel isActive={true}>
         Please make sure you enter enough information to be know about your study goals
       </Panel>

      
                  
                <form>
                <div>
                        <label htmlFor="langauge">
                            What Langauage you want to choose to communicate
                        </label>
                        <ReactLanguageSelect
    defaultLanguage="en"
    onSelect={onSelectLanguage} />
                      </div>                                             
              
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
                                                                                           
                    <div>
                        <label htmlFor="phoneNumber">
                            Phone Number
                        </label>
                        <input
                            type="phoneNumber"
                            label="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhone(e.target.value)}  
                            required                                    
                            placeholder="Enter Phone Number"                                
                        />
                    </div>

                    <div>
                        <label htmlFor="password">
                            Enter Availibility From
                        </label>
                        <input
                            type="date"
                            label="Enter Availibility From"
                            value={starttimeof}
                            onChange={(e) => setTime(e.target.value)} 
                            required                                 
                            placeholder="Enter Availibility"              
                        />
                    </div>                                             

                    <div>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            label="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            required                                 
                            placeholder="Enter your first and Last Name only"              
                        />
                    </div>                                             

                    <div>
                        <label htmlFor="details">
                        What you want to achieve , Enter goals details
                        </label>
                        <textarea name="details" type="textarea" placeholder="Enter Details" rows={5} cols={80} 
                           value={details}
                           onChange={(e) => setDetails(e.target.value)} />
                    </div>                                             

                       <div>
                        <label htmlFor="country">
                            Select Country 
                        </label>
                        <Select options={options} value={countrycodesel} onChange={changeCountryCode} />

                      </div>                                             
                
                     
               
                                                           



                    <button className='btn btn-primary'
                        type="submit" 
                        onClick={OnSubmit}                        
                    >  
                        Submit                             
                    </button>
                                                                 
                </form>
               
                <p>
                    Already have an account?{' '}
                    <NavLink to="/login">
                        Sign in
                    </NavLink>
                </p>                   
            </div>

        
    </section>
</main>
</Container>
 
    </Stack>
   </Container>

      );
}

export default StudentSignUp;