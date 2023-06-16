

import './TeacherSelected.css';
import {React, useState , useEffect} from 'react' 
import {useParams} from 'react-router-dom';

import { getDatabase, ref, onValue} from "firebase/database";

 function TeacherSelected() {

  var teachersData =  [];
    const teacherSelectedInfo = useParams();
    var uuid = teacherSelectedInfo.teacherId;
  //  console.log(uuid);  
  

    
    const database = getDatabase();
    var [currentTeachers, setCurrentTeachers] = useState(teachersData);
    var [currentUID,setUID] = useState(uuid);

 
    
useEffect(() => {
 
console.log(currentUID);
  const teachers = [];
  console.log(`/Teacher/${currentUID}/`);
  const refer = ref(database, `/Teacher/${currentUID}/` );
//const dbRef =  database.ref('/Teacher/' + currentUID);
  

//  console.log(ref.Once().TeacherName);

onValue(refer, (snapshot) => {
        snapshot.forEach(snap => {
           
            let keyName = snap.key;
            console.log(keyName);
            let dataM = snap.val();
            console.log(dataM);
            
            // No Fix DB Structure
               teachers.push({"key": keyName , "data": dataM});
        });
        setCurrentTeachers(teachers);
        setUID(currentUID);
    
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
  </div>
)
      }

      export default TeacherSelected;


