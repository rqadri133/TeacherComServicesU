import Stack from 'react-bootstrap/Stack';
import * as React from 'react';
import dayjs,  { Dayjs  } from 'dayjs';
import Button from 'react-bootstrap/Button';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { useEffect ,useState  } from 'react';
import {Link , useParams} from 'react-router-dom';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

import { getDatabase, ref, set} from "firebase/database";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Typography from '@mui/material/Typography';
import { PickersTimezone } from '@mui/x-date-pickers/models';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Box from '@mui/material/Box';
import {
  DateTimePickerTabs,
  DateTimePickerTabsProps,
} from '@mui/x-date-pickers/DateTimePicker';
import { cpuUsage } from 'process';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
export default function TeacherSlot() {
  
  const database = getDatabase();
  var teacherInfo = useParams();

  var teacherSlots:any = [];
  var dateselected = {};
  // eslint-disable-next-line no-unused-vars
  
 // we don't need to filter by id just show all teachers
  var uuid = teacherInfo.teacherId;
  var yearsofExpereince = teacherInfo.yearsofexpereince;
  console.log(yearsofExpereince);
  var teacherName = teacherInfo.teachername;
  console.log(teacherName);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault('America/New_York');
  
  const [counter, setCounter] = useState(0);  

  const [timevalue, setValue] = useState(dayjs.utc('2024-01-05T15:30'));
  var currentVal = [];
  currentVal.push( {"key": counter  , "data": timevalue});
  var [mytimeslots, setTimeSlots]= useState(currentVal);
 var i = 0;
  

  // Load Recreate from react boot strao Stack PAnel
  const saveUpdateDateModelDate = (currentTime) => {
    i = i + 1;
    setCounter(i);          
   

  }
  function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
 
  useEffect(() => {

     saveUpdateDateModelDate(timevalue); 
     if(currentVal != null)
     { 
        currentVal.push({"key": counter  , "data": timevalue});
        setTimeSlots(currentVal);
      
    }
    else 
    {
      
        console.log('no id :( ');
      
    
    }

    
    //setCurrentTeachers(prevTeachers => prevTeachers.add(teachers))  
  }, [ setTimeSlots ]);

  
    return (
      <div className='container'>
    <div id="localtime">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
  
  <DateTimePicker
      label="With Time Clock" value={timevalue} onChange={setValue}   

      viewRenderers={{
        hours: renderTimeViewClock,
        minutes: renderTimeViewClock,
        seconds: renderTimeViewClock,
      }}
    />
 
  </LocalizationProvider>

    </div>

 <div id="timeslots" >
 <Stack gap={2} >
        <h2>You have added these Time slots </h2>
        {mytimeslots.map( function(row,index)  {
        var timeVal = row.data;
        console.log(row.key);
   return (
        <div id ={row.key} className="login100-form-btn" >
                    Time Slot : {timeVal == null ? 'null' : timeVal.format()}
         </div>  
   )})}
  
    </Stack>

 </div>
 </div>
 
    )
};

