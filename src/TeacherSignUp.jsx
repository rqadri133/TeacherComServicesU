import React , { useState,useRef  } from "react";
import { Container ,Stack} from 'react-bootstrap';
import {NavLink,  useNavigate ,useParams } from 'react-router-dom';
import { getDatabase, ref, set} from "firebase/database";
import Panel from "./Panel";
import { useMemo } from 'react'
import Select from 'react-select'
import {  createUserWithEmailAndPassword } from 'firebase/auth';

import countryList from 'react-select-country-list'



const TeacherSignUp = () => {


  
  const [phoneNumber, setPhone] = useState('');
    const [details, setDetails] = useState('');
    const [starttimeof, setTime] = useState('');
    const [years, setYears] = useState('');
    const [name, setName] = useState('');
    
    const [countrycodesel, setCountryCode] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  


  const inputRef = useRef(null);
 
  const navigate = useNavigate();
  const teacherInfo = useParams();

 // we don't need to filter by id just show all teachers
const uuid = teacherInfo.userId;
console.log(uuid);
const database = getDatabase();




 var keym = uuid;
 

 
  
  const OnSubmit = (e) => {
    e.preventDefault();
   
   
    //const {  phoneNumber , details ,starttimeof  } = e.target.elements;
    console.log (phoneNumber);
    
     
    //const usersRef = ref(database, '/Teacher/'  );
     // example set for new firebase version improved ....    
     // Continue      
     
   // var current = modelData[keym];
     set(ref(database, '/Teacher/' + uuid ), 
      {
        CreatedBy : '',
        CreatedDate: '',
        TeacherClassificationID: 11,
        TeacherName : name,
        Phone: phoneNumber ,
        Experience : details,
        YearsOfTeaching: years,
        StartDate : starttimeof,
        UID: keym,
        CountryCode: countrycodesel,
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
        Teacher Sign Up
      </div>
      
            <div> 
            
       <Panel isActive={true}>
         Please make sure you enter enough information to be qualified for teacher.
       </Panel>

      
                  
                <form>                                                                                            
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
                            Password
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
                            Enter Details
                        </label>
                        <textarea name="details" type="textarea" placeholder="Enter Details" rows={5} cols={80} 
                           value={details}
                           onChange={(e) => setDetails(e.target.value)} />
                    </div>                                             

                    <div>
                        <label htmlFor="details">
                            Enter Years of Teaching Experience
                        </label>
                        <input
                            type="number"
                            label="Enter Years"
                            value={years}
                            onChange={(e) => setYears(e.target.value)} 
                            required                                 
                            placeholder="Enter Years"              
                        />

                       <div>
                        <label htmlFor="country">
                            Select Country 
                        </label>
                        <Select options={options} value={countrycodesel} onChange={changeCountryCode} />

                      </div>                                             
                
                     
               
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
        </div>
    </section>
</main>
</Container>
 
    </Stack>
   </Container>

      );
}

export default TeacherSignUp;