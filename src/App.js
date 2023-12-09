import React,{Fragment, useState} from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';

function App() {

  const [userlist,setuserlist]=useState([]);

  const addUseraHandler=(uname,uage)=>{
    setuserlist((prevUsersList)=>{
      return [...prevUsersList,{name:uname,age:uage,id: Math.random().toString() }]

    });
  }
  return <Fragment>
  <AddUser onAddUser={addUseraHandler}/>
  <UserList users={userlist}/>
  
  </Fragment>
    
  
}

export default App;
