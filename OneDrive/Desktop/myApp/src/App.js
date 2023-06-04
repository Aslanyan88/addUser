import './App.css';
import Body from './Components/Content/Body';
import Users from './Components/Content/Users';
import Login from './Components/Content/Login';
import SignUp from './Components/Content/SignUp';
import {Routes,Route} from "react-router-dom"
import Layout from './Components/Layout';
import dc1 from "./Images/doctor1.webp"
import dc2 from "./Images/doctor2.jpg"
import dc3 from "./Images/doctor3.jpg"
import { useState } from 'react';

function App() {
  
  const [users, setUsers] = useState([
    {
        id:1,
        src: dc1,
        title: "Dr. Aslanyan",
        text: "Neurology",
    },
    {
        id:2,
        src: dc2,
        title: "Dr. Martirosyan" ,
        text: "Surgery",
    },
    {
        id:3,
        src: dc3,
        title: "Dr. Sahakyan" ,
        text: "Psychiatry",
    },
    {
        id:4,
        src: dc2,
        title: "Dr. Sahakyan" ,
        text: "Psychiatry",
    },  
    {
        id:5,
        src: dc3,
        title: "Dr. Sahakyan" ,
        text: "Psychiatry",
    }
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };
console.log(users,'user')
  return (
    <div className="App">
          <Routes>
            <Route path='/' element = {<Layout/>}>
                 <Route path='Body' element={ <Body/>} />
                 <Route path='Users' element={<Users users={users}/>} />     
                 <Route path='Login' element={ <Login/>} />  
                <Route path='SignUp' element={ <SignUp addUser={addUser}/>} />         
            </Route>   
          </Routes>
    </div>
  );
}

export default App;
