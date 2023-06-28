

import './TeacherSelected.css';
import {React, useState , useEffect  } from 'react' 
import {useParams, useNavigate} from 'react-router-dom';

import { getDatabase, ref, onValue} from "firebase/database";
import { Button } from 'react-bootstrap';
import VideoContent from './firebase/communicator/Video';

 function TeacherSelected() {

  var teachersData =  [];
    const teacherSelectedInfo = useParams();
    const uuid = teacherSelectedInfo.teacherId;
  //  console.log(uuid);  
    const navigate = useNavigate();
   var teacherData;
    
    const database = getDatabase();
    var [currentTeachers, setCurrentTeachers] = useState(teachersData);
    var [selectedTeacher,setSelectedTeacher] = useState(teacherData);
    var [selectedVideoUrl,setVideoUrl] = useState('');
    var [videodisabled,setDisabled]=useState(true);
    var [enableDisableText, setDisabledText] = useState('Enable');
   // var [currentUID,setUID] = useState(uuid);

 
    
  const displayVideoContent = () => {

      // this video url will be picked from storage container
      const url = selectedTeacher.data.videoUrl;
      setVideoUrl(url);

      if(videodisabled === true)
      {
        setDisabled(false);
        setDisabledText("Disable");

      }
      else 
      {
        setDisabled(true);
        setDisabledText("Enable");
 
      }
     // navigate(`/Video/${url}`);
    

  }



const registerDemoCycle=()=>
{
   navigate('/DemoRegister');

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
          <Button onClick={registerDemoCycle} variant='primary'> Register Demo </Button>
        </div>
          <div className='col0 col-sm'>
            <VideoContent  props={{videoUrl:selectedVideoUrl, disabled: videodisabled}} />
            <Button onClick={displayVideoContent}  variant='success'> {enableDisableText} Video Introduction </Button>
      
          </div>
        </div>
        
           
          
      </section>
  
  </div>
)
      }

      export default TeacherSelected;


