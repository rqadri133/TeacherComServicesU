import {React, useState } from 'react' 
import {Button} from 'react-bootstrap' ;
import {  useParams} from 'react-router-dom';
import { getDatabase} from "firebase/database";

import { useNavigate } from "react-router-dom";
import CoolButton  from './CoolButton';
import ResetButton from './ResetButton';


  const  DemoRegister=() => {
    // You will be navigate to payment and class availibility slots
    const teacherInfo = useParams();
    const [ngoals,setGoals] = useState('Enter Goals Here , this page is in Progress');
    

    const navigate = useNavigate();
     // we don't need to filter by id just show all teachers
    const uuid = teacherInfo.teacherId;
    console.log(uuid);
    // global teacher list plus all 
    // under one global id all and then filter based login Assigned Teacher 
    // Generate guid
    
    
    const database = getDatabase();
    
    const callUpdate=(e)=> {
        const currentVal = e.target.value;
         setGoals(currentVal);            

    }

   // This will request the Goals and will 

    const handleSubmit= (e) => {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
       const [newGoals] = e.target.values;
       setGoals(newGoals); 
  
      
    }
    // Display Time Slots Here tonight
  
    return (
     
     <div className='container'>
       <form method="post" onSubmit={handleSubmit}>
        <label>
          <b>Whats your goals </b> </label>
          <textarea value={ngoals}
            name="newGoals"
            onChange={callUpdate}
            rows={4}
            cols={40}
          />
       
        <hr />
        <ResetButton props={{goals:ngoals}} />
        <CoolButton props={{goals:ngoals}}  />
    
      </form>
     </div>
    
    );
  }
   export default DemoRegister;