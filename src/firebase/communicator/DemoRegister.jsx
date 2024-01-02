import {React, useState } from 'react' 
import {Button} from 'react-bootstrap' ;
import {  useParams} from 'react-router-dom';
import { getDatabase} from "firebase/database";
import {   useEffect, useCallback} from 'react' 


import { useNavigate  } from "react-router-dom";
import CoolButton  from './CoolButton';
import ResetButton from './ResetButton';
import {  ref, onValue} from "firebase/database";


  const  DemoRegister=() => {
    // You will be navigate to payment and class availibility slots
    const teacherInfo = useParams();
    const [ngoals,setGoals] = useState('Enter Goals Here , this page is in Progress');
    var teachersData = [];
    var [currentTeachers, setCurrentTeachers] = useState(teachersData);
    var [selectedTeacher,setSelectedTeacher] = useState('');
    
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
      const teachername = selectedTeacher.data.TeacherName;
      const yearsofexpereince = selectedTeacher.data.YearsOfTeaching;
      navigate(`/teacherslots/${uuid}/${teachername}/${yearsofexpereince}`);
   
       // const [newGoals] = e.target.values;
       // setGoals(newGoals); 
  
      
    }


    useEffect(() => {
 
      const teachers = [];
      
    const refer = ref(database, '/Teacher' );
    //const dbRef =  database.ref('/Teacher/' + currentUID);
      
    
    //  console.log(ref.Once().TeacherName);
    
    onValue(refer, (snapshot) => {
            snapshot.forEach(snap => {
               
                let keyName = snap.key;
                console.log(keyName);
                let dataM = snap.val();
                console.log(dataM);
                console.log(uuid);
                // No Fix DB Structure
                  if(keyName === uuid)
                  {
                   teachers.push({"key": keyName , "data": dataM});
                  }
            });
            setSelectedTeacher(teachers[0]);
            setCurrentTeachers(teachers);
          
      });
      //setCurrentTeachers(prevTeachers => prevTeachers.add(teachers))  
    }, [ setCurrentTeachers]);
      

    // Display Time Slots Here tonight
  
    return (
      <div className='container'>
        <h2>Teacher Selected</h2>
     {currentTeachers.map( function(row,index)  {
      return (

      <section key={index}  className="profile">
        <h2>{row.data.TeacherName}</h2>
        <img
          className="avatar"
          src={row.data.imageUrl}
          alt={row.data.TeacherName}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Experience: </b> 
            {row.data.Experience}
          </li>
          <li>
            <b>Year of Experience : {row.data.YearsOfTeaching} </b> 
             {row.data.CountryCode.label}
          </li>
          <li>
            <b>Available From: </b>
            {row.data.StartDate}
          </li>
        </ul>
      </section>
        
  )})}
     <section>
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
        <Button type='submit' variant='primary'> Save Data </Button>
    
      </form>
     
     </section>
      
     </div>
    );
  }
   export default DemoRegister;