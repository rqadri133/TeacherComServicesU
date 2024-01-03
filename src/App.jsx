

import LoginForm from './LoginForm'
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import TeachersDisplay from './firebase/TeachersDisplay';
import TeacherContentDisplay from './firebase/TeacherContentDisplay';
import WelcomePage, { CurrentDialog } from './WelcomePage';
import Intro from './Intro';
import Signup from './Signup';
import StudentSignUp from './StudentSignUp';
import TeacherSignUp from './TeacherSignUp';
import TeachersListing from './firebase/TeachersListing';
import TeacherSelected from './TeacherSelected';
import DemoRegister from './firebase/communicator/DemoRegister';
import { useEffect , useState } from 'react';    
import { AuthProvider } from './AuthContext';
import TeacherSlot from './TeacherSlot';

function App() {
  
  const token = getToken();

  function getToken () 
  {
     const tokenItem =  localStorage.getItem("auth");     
     console.log(tokenItem);
    return tokenItem;
  }


  
  
  
  
  return (

     <>
     <AuthProvider>

     <WelcomePage/>
 
      <BrowserRouter>
        <Routes>
         <Route exact path="/" element={<Intro/>} />
         
         <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/studentsignup" element={<StudentSignUp/>} />
        <Route exact path="/demoregister/:teacherId" element={<DemoRegister/>} />
        
        <Route exact path="/teachersignup/:userId" element={<TeacherSignUp/>} />
       
           <Route exact path="/teachers/:teacherId"  element={<TeachersDisplay />} />
         <Route exact path="/teacherselected/:teacherId"  element={<TeacherSelected  />} />
      
         <Route exact path="/teacherslist/:teacherId" element={ <TeachersListing  />} />
         <Route exact path="/teacherslot/:teacherId/:teachername/:yearsofexpereince" element = {<TeacherSlot/>}  />
   
          
         <Route exact path="/contents" element = {<TeacherContentDisplay/>}  />
  
        
              
          </Routes>
     </BrowserRouter>  
     </AuthProvider>

    <CurrentDialog/>
    
  </>


  );
}


export default App;
