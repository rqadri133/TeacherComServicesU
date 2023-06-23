

import './TeacherSelected.css';
import {React, useState , useEffect} from 'react' 
import {useParams} from 'react-router-dom';

import { getDatabase, ref, onValue} from "firebase/database";
import { Button } from 'react-bootstrap';

 function TeacherSelected() {

  var teachersData =  [];
    const teacherSelectedInfo = useParams();
    const uuid = teacherSelectedInfo.teacherId;
  //  console.log(uuid);  
  

    
    const database = getDatabase();
    var [currentTeachers, setCurrentTeachers] = useState(teachersData);
   // var [currentUID,setUID] = useState(uuid);

 
    
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
        setCurrentTeachers(teachers);
      
  });
  //setCurrentTeachers(prevTeachers => prevTeachers.add(teachers))  
}, [ setCurrentTeachers]);
  
return (
<div className="container">

    
    
      <h1>Teacher Description</h1>
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
        <div className='row'>
          <div className='col0 col-sm'>
          <Button variant='primary'> Register Demo </Button>
        </div>
          <div className='col0 col-sm'>
            <Button variant='success'> Watch Video Introduction </Button>
      
          </div>
        </div>
            
           
          
      </section>
  
  </div>
)
      }

      export default TeacherSelected;


