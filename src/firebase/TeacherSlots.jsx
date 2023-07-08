import Stack from 'react-bootstrap/Stack';
import { useEffect ,useState  } from 'react';
import { getDatabase, ref, onValue} from "firebase/database";
import {Link , useParams} from 'react-router-dom';
import FirstComponent from './RemoveTeacher';
import UserComponent from './TeacherDetailComponent';
import TeacherProfileComponent from './TeacherDetailComponent';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import './TeacherSlots.css';

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

  const [isScheduling, setIsScheduling] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleErr, setScheduleErr] = useState('');
  const handleScheduled = date => {
    setIsScheduling(true);
    setScheduleErr('');
    submitSloteRequest(date)
      .then(json => {
        setScheduleErr('');
        setIsScheduled(true);
        console.log('fake response: ', json);
      })
      .catch(err => {
        setScheduleErr(err);
      })
      .finally(() => {
        setIsScheduling(false);
      });

    }

    function submitSloteRequest(data) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Uncomment below to trigger error:
          // return reject('Error: KABOOM!');
          resolve({
            status: 'ok',
            scheduled: data
          });
        }, 2e3);
      });
    }

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
 
 <div className="container">
    <h2>Select Available Time Slots Here </h2>
    <div className='ncontent'>
      <h3>Pick a Day and Time</h3>
      <DayTimePicker timeSlotSizeMinutes={50}
      isLoading={isScheduling}
      isDone={isScheduled}
      err={scheduleErr}
      onConfirm={handleScheduled} />
    </div>

  </div>
    )
};

export default TeacherSlot;