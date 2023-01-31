

import LoginForm from './LoginForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeachersDisplay from './firebase/TeachersDisplay';
import TeacherContentDisplay from './firebase/TeacherContentDisplay';
import WelcomePage from './WelcomePage';
    

function App() {
  
  return (

     <>
     <WelcomePage/>
 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm/>} />
          <Route exact path="/teachers/:teacherId"  element={<TeachersDisplay/>} />
          <Route exact path="/contents" element = {<TeacherContentDisplay/>} />
          </Routes>
     </BrowserRouter>  
    
  </>


  );
}

export default App;
