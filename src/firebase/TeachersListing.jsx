
import './TeacherList.css'
import {React, useState , useEffect, useCallback} from 'react' 
import {Button, Table} from 'react-bootstrap' ;
import {Link , useParams} from 'react-router-dom';
import { getDatabase, ref, onValue} from "firebase/database";

import { useNavigate } from "react-router-dom";

function TeachersListing()  {
// age 42 not bad
var teachersData =  [];
const teacherInfo = useParams();
const navigate = useNavigate();
 // we don't need to filter by id just show all teachers
const uuid = teacherInfo.teacherId;
console.log(uuid);
// global teacher list plus all 
// under one global id all and then filter based login Assigned Teacher 
// Generate guid
var [currentTeachers, setCurrentTeachers] = useState(teachersData);


const [loading, setLoading] = useState(true);
var [currentFilterValue, setCurrentValue] = useState('');
const database = getDatabase();

const  handleSubmit = (e) => {
     setCurrentValue(e.target.value);
    
   


};
const  handleChange = (e) => {
    

    setCurrentValue(e.target.value);
    
    getFilteredTeachers(e.target.value);

    
     

};

const  AddTeacher = (e) => {
    console.log(e.target.value);
    navigate(`/teacherselected/${uuid}` );
    
     

};

 const  getFilteredTeachers = useCallback((currentFilterValue) => {
 
     if(!currentFilterValue)
     {
        console.log(currentFilterValue);
        const refer = ref(database, '/Teacher'  );
        const teachers = [];
          
   
          onValue(refer, (snapshot) => {
              snapshot.forEach(snap => {
                 
                  let keyName = snap.key;
                  let dataM = snap.val();
                  console.log(dataM);
                  // No Fix DB Structure
                     teachers.push({"key": keyName , "data": dataM});
              });
              setCurrentTeachers(teachers);
              setLoading(false)
          
        });
  
        if(currentFilterValue === "")
        {
            return;
        }
   
      

     }
     currentTeachers = currentTeachers.filter ( teacher => teacher.data.TeacherName.includes(currentFilterValue));
     setCurrentTeachers(currentTeachers);
  
     
     console.log(currentTeachers);
     


});




useEffect(() => {
  console.log(uuid);  
  const refer = ref(database, '/Teacher/'  );
  const teachers = [];
    
    onValue(refer, (snapshot) => {
        snapshot.forEach(snap => {
           
            let keyName = snap.key;
            let dataM = snap.val();
            // No Fix DB Structure
               teachers.push({"key": keyName , "data": dataM});
        });
        setCurrentTeachers(teachers);
        setLoading(false)
    
  });
  //setCurrentTeachers(prevTeachers => prevTeachers.add(teachers))  
}, [ setCurrentTeachers]);
  

 
 return (
    <div className="MainDiv">
      <div className="jumbotron text-center bg-sky">
          <h2>Teachers Information</h2>
      </div>
     <div className="container">
          <>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                            <form className="mt-4" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="Type Here to Search By Teacher Name or Language"
                                        
                                        value={currentFilterValue}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <button className="button-orange" size="lg" type="submit">
          Search
        </button>
                                </div>    
                                <div>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
      


     </div>
      <div className="container">

     {currentTeachers.map( function(row,index)  {
        return (
         
<li key={index} value={row.data.UID}>
<img id={row.data.ID} src={row.data.imageUrl} background-repeat="none"  width="100" height="100" /> 
    <p>
        <b>{row.data.TeacherName}</b>
          {' ' + row.data.Experience + ' '}
          having {row.data.YearsOfTeaching} years of expereince.  
   
      </p>        <span> <Button variant="primary" value={row.data.UID} onClick={AddTeacher}> Select Me </Button> </span>
    </li>
  )})}

        
               
      
    
  


     </div>
    </div>
  );
  

}

export default TeachersListing;