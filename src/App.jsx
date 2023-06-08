

import LoginForm from './LoginForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeachersDisplay from './firebase/TeachersDisplay';
import TeacherContentDisplay from './firebase/TeacherContentDisplay';
import WelcomePage, { CurrentDialog } from './WelcomePage';
import Intro from './Intro';
import Signup from './Signup';
import StudentSignUp from './StudentSignUp';
import TeacherSignUp from './TeacherSignUp';
import TeachersListing from './firebase/TeachersListing';
    

function App() {
  
  return (

     <>
     <WelcomePage/>
 
      <BrowserRouter>
        <Routes>
         <Route exact path="/" element={<Intro/>} />
         
         <Route exact path="/login" element={<LoginForm/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/studentsignup" element={<StudentSignUp/>} />
        <Route exact path="/teachersignup/:userId" element={<TeacherSignUp/>} />

        
              
         <Route exact path="/teachers/:teacherId"  element={<TeachersDisplay/>} />
         <Route exact path="/teacherslist/:teacherId"  element={<TeachersListing/>} />

          <Route exact path="/contents" element = {<TeacherContentDisplay/>} />
          </Routes>
     </BrowserRouter>  
    <CurrentDialog/>
  </>


  );
}

export default App;
