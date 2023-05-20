
import './TeacherDisplay.css'
import {React, useState , useEffect, useCallback} from 'react' 
import {Table} from 'react-bootstrap' ;
import {Link , useParams} from 'react-router-dom';
import { getDatabase, ref, onValue} from "firebase/database";



function TeachersDisplay()  {
// age 42 not bad
var teachersData =  [];
const teacherInfo = useParams();

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

 const  getFilteredTeachers = useCallback((currentFilterValue) => {
 
     if(!currentFilterValue)
     {
        const refer = ref(database, '/Teacher/modelData' + uuid );
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

     }
     
     console.log(currentTeachers);
     currentTeachers = currentTeachers.filter ( teacher => teacher.data.TeacherName.includes(currentFilterValue));
     setCurrentTeachers(currentTeachers);
  


});




useEffect(() => {
  console.log(uuid);  
  const refer = ref(database, '/Teacher/' + uuid );
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
          <Table  className="display table">
            <thead className="thead-dark">
                <tr>
                    <th>Teacher Name</th>
                    <th>Created Date</th>
                    <th>View Course Content</th>
                    <th>Picture</th>
            
                </tr>
            </thead>
            <tbody>
            {currentTeachers.map( function(row,index)  {
             
                return (
                   <tr key={index}>     
                    <td>{row.data.TeacherName}</td>
                    <td>{row.data.CreatedDate}</td>
                    <td><Link id={index} className="navbar-item"  to="/contents" >   Contents</Link></td>
            
  <td> <img id={row.data.ID} src={row.data.imageUrl} background-repeat="none"  width="100" height="100" /></td>
                    </tr>
              
                    
                );
               
                })}
        
            </tbody>
            
         </Table>
          
     </div>
    </div>
  );
  

};

export default TeachersDisplay;