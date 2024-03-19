import React, { useEffect, useState } from 'react'
import axios from 'axios'

const User = () => {

  const [user, setUser] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios.get(url).then(response => {
      setUser(response.data);
      console.log(response.data)
    });
  }, []);

 function  HandleRemove() 
 {
  let index = Math.floor(Math.random() * user.length);
  let removeUser= user.filter((user, i)=> {
  console.log(i,i !== index)
    return i !== index}) 
    console.log(index)
    
    setUser(removeUser)
  }

   function Realod()
  {
    fetch(url).then( respones => {
      return respones.json()
    }).then(data=> setUser(data))

  }

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {user.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={HandleRemove}>Remove random line </button>
      { <button onClick={Realod}>Realod data </button> }

    </div>
  );
};

export default User;


//https://jsonplaceholder.typicode.com/users
//Home work
//1. create new project vite
//2.add new component name it tabls.jsx
//3.fetch data from https://jsonplaceholder.typicode.com/users
//4.diaplay  table with id,name,email.phone  by using map function
//advanced add 2 buttons A.remuve B.reload
//5.on click at remove  remove random row from table
//6.on click at reload  reload data from server