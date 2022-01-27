//import Area
import { useEffect, useState } from 'react';
import './App.css';


function App() {
//1. state/variable
const [studentName, setStudentName] = useState('');

useEffect(()=>{

}, [] );


//2. function
let myFunction = () =>{
  console.log(studentName);
  //call the api here
  var data = {
    "data":{
      "Name":studentName
    }
  }
  //fetch api/promise chain
  fetch("http://localhost:1337/api/students",{
    method:'POST',
    headers:{
      //'accept': 'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data)

  })
  //.then(Response => Response.json())

  .then(()=>{
    //console.log(data)
  })

  .catch(()=>{
    //console.log(error)
  })
  
  .finally(()=>{
    //console.log(all)
  });
}

//3. return statement

return (
  <div className="App">
    { studentName }
    <form>
      <label>Enter student Name:  
        <input type="text" value={ studentName } name='Name' onChange={(e)=>{ setStudentName(e.target.value)} } /><br />
      </label>
      
      <input type="button" onClick={ myFunction } name="studentName" value="Save student" />
    </form>
    
  </div>
);
}
export default App;
