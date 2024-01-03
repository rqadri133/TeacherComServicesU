import Stack from 'react-bootstrap/Stack';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Button from 'react-bootstrap/Button';


import { useEffect ,useState  } from 'react';
import {Link , useParams} from 'react-router-dom';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

import { getDatabase, ref, set} from "firebase/database";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from '@mui/material/Box';
import {
  DateTimePickerTabs,
  DateTimePickerTabsProps,
} from '@mui/x-date-pickers/DateTimePicker';


function CustomTabs(props: DateTimePickerTabsProps) {
  return (
    <React.Fragment>
      <DateTimePickerTabs {...props} />
      <Box sx={{ backgroundColor: 'blueviolet', height: 5 }} />
    </React.Fragment>
  );
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
function TeacherSlot() {
  
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
  var [currentdayselected,setcurrentday] = useState('');
  
  var [datetimeselected, setValue] = useState('2022-04-17T15:30');

  // Load Recreate from react boot strao Stack PAnel
  const saveUpdateDateModelDate = () => {
    console.log(datetimeselected);          
   

  }
 
 
  
    return (
      <div className='container'>
    
  <LocalizationProvider dateAdapter={AdapterDayjs}>
  
  <DateTimePicker
      label="With Time Clock" value={setValue}
      viewRenderers={{
        hours: renderTimeViewClock,
        minutes: renderTimeViewClock,
        seconds: renderTimeViewClock,
      }}
    />
 
</LocalizationProvider>
  
  </div>
    
     
     
    )
};

export default TeacherSlot;