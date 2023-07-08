import Stack from 'react-bootstrap/Stack';
import { useEffect ,useState  } from 'react';
import { getDatabase, ref, onValue} from "firebase/database";
import {Link , useParams} from 'react-router-dom';
import FirstComponent from './RemoveTeacher';
import UserComponent from './TeacherDetailComponent';
import TeacherProfileComponent from './TeacherDetailComponent';

function TeacherSlot() {
  
  const database = getDatabase();
  var teacherInfo = useParams();
  var teacherSlots = [];
 // we don't need to filter by id just show all teachers
  var uuid = teacherInfo.teacherId;
  var yearsofExpereince = teacherInfo.yearsofexpereince;
  console.log(yearsofExpereince);
  var teacherName = teacherInfo.teachername;
  console.log(teacherName);
  var [currentTeachersSlots, setCurrentSlots] = useState(teacherSlots);
  var slotTimes = [{currentdata:{slots:[{EndTime:'', IsAvailable:'' , StartTime:'', StudentID:''}]}}]
  var [currentSlotTimes, setCurrentSlotTimes] = useState(slotTimes);

useEffect(() => {
    
    const refer = ref(database, `/TimeSlots/${uuid}`  );
    const teachers = [];
      
      onValue(refer, (snapshot) => {
          snapshot.forEach(snap => {
             console.log(snap.hasChildren);
              let keyName = snap.key;
               let dataM = snap.val();
             
              console.log(uuid + ' ' +  snap.key);
              
              if(keyName === 'StartDate')
              {
                  console.log('Available Start from ' +  keyName);
                                  
              }
              else if(keyName === 'EndDate')
              {
                console.log('Found End Date' + ' ' + keyName);


              }
              else 
              {
                    console.log('For the Data ' + keyName);
                  // teacherSlots.push({"key": keyName , "data": dataM});

                    for (const key in dataM) {
                      console.log('Got Slots Here , Continue From Here');
                      console.log(key, dataM[key]);
                    }
                  
                     
                }

              
                        
                   
                  
                   // No Fix DB Structure
           
              
          });
          setCurrentSlots(teacherSlots);
      
    });
     
    //setCurrentTeachers(prevTeachers => prevTeachers.add(teachers))  
  }, [ setCurrentSlots]);
    
  
  
    return (
 
 <div className='container'>
    <TeacherProfileComponent name={teacherName}  YearsOfExperience={yearsofExpereince} />

  </div>
    )
};

export default TeacherSlot;