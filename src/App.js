import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';

function App() {
  const [userlist,setuserlist]=useState([]);
  const addUseraHandler=(uname,uage)=>{
    setuserlist((prevUsersList)=>{
      return [...prevUsersList,{name:uname,age:uage}]

    });
  }
  return <>
  <AddUser onAddUser={addUseraHandler}/>
  <UserList users={userlist}/>
  
  </>
    
  
}

export default App;
