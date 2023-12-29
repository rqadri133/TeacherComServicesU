import Stack from 'react-bootstrap/Stack';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Button from 'react-bootstrap/Button';


import { useEffect ,useState  } from 'react';
import {Link , useParams} from 'react-router-dom';
import FirstComponent from './RemoveTeacher';
import UserComponent from './TeacherDetailComponent';
import TeacherProfileComponent from './TeacherDetailComponent';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

import './TeacherSlots.css';
import Slot from './Slot';
import { getDatabase, ref, set} from "firebase/database";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from '@mui/material/Box';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import {
  DateTimePickerTabs,
  DateTimePickerTabsProps,
} from '@mui/x-date-pickers/DateTimePicker';
import LightModeIcon from '@mui/icons-material/LightMode';
import AcUnitIcon from '@mui/icons-material/AcUnit';

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
  const [datetimeselected, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

  // Load Recreate from react boot strao Stack PAnel
  const saveUpdateDateModelDate = () => {
    console.log(datetimeselected);          
   

  }
 
 
  
    return (
     
      <div className='container'>
        <div>
        <h1> Teachers please click on calender icon to confirm your availibility</h1>  
        <span>&nbsp;</span>
     
        </div>  
     
     <div>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
     
     <DateTimePicker
         label="With Time Clock" value={datetimeselected}
         onChange={(newValue) => setValue(newValue)}
         viewRenderers={{
           hours: renderTimeViewClock,
           minutes: renderTimeViewClock,
           seconds: renderTimeViewClock,
         }}
       />
    
   </LocalizationProvider>
   <span>&nbsp;</span>
     
     </div>
     <div>
     <span>&nbsp;</span>
     
     <Button variant="primary" size="lg" onClick={saveUpdateDateModelDate}>
Click To Submit your Time Slot      </Button>
     </div>
      
      </div>
     
    )
};

export default TeacherSlot;