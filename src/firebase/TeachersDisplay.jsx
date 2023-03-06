
import './TeacherDisplay.css'
import {React, useState , useEffect} from 'react' 
import {Table} from 'react-bootstrap' ;
import {Link, useLocation, useParams} from 'react-router-dom';
import { getDatabase, ref, onValue} from "firebase/database";



export function TeachersDisplay()  {
// age 42 not bad
var teachersData =  [];
const teacherInfo = useParams();
const uuid = teacherInfo.teacherId;
var [currentTeachers, setCurrentTeachers] = useState(teachersData);
const [loading, setLoading] = useState(true);
var [currentFilterValue, setCurrentValue] = useState('');


const database = getDatabase();

const  handleSubmit = (e) => {
     setCurrentValue(e.target.value);
    
   


};
const  handleChange = (e) => {
    console.log(e.target.value);
    setCurrentValue(e.target.value);
     

};

 function getFilteredTeachers (){
    //  console.log(currentFilterValue);
      if(!currentFilterValue)
      {
        setCurrentTeachers(currentTeachers);
      } 
      var otherTeachers = currentTeachers.filter((teacher) =>   teacher.TeacherName === currentFilterValue );  
      setCurrentTeachers(otherTeachers);
    };

useEffect(() => {
  console.log(uuid);  
  const refer = ref(database, '/Teacher/' + uuid );
  if(currentFilterValue === '')
  {
    onValue(refer, (snapshot) => {
        let teachers = [];
        snapshot.forEach(snap => {
           
            let keyName = snap.key;
            let dataM = snap.val();
            // No Fix DB Structure
               teachers.push({"key": keyName , "data": dataM});
        });
        
      setCurrentTeachers(teachers);  
      console.log(currentTeachers); 
      setLoading(false);
     // getFilteredTeachers(); 
  });


  }
  else 
  {
    getFilteredTeachers();

  }
      
 // console.error(currentFilterValue);
    
  
  }, [currentFilterValue]);
  
  if (loading) {
    return <p>Loading...</p>;
  }

 
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