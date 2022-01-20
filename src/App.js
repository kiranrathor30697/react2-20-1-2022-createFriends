//import Area
import { useState } from 'react';
import './App.css';

function App() {
//1. state/variable
const [friendName, setFriendName] = useState('kiran');

//2. function
let myFunction = () =>{
  console.log(friendName)
}

//3. return statement

return (
  <div className="App">
    <form>
      <label>Enter Friends Name:<br />
        <input type="text" value={ friendName } onChange={(e)=>{setFriendName(e.target.value)}} />
      </label><br />
      <input type="button" onClick={myFunction} name="Friends Name" value="Save Friends" />
    </form>
    
  </div>
);
}
export default App;
