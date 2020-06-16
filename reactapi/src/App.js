import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

    const [items,setUsers] = useState([]);
    const [errors,setErrors] = useState(false);

    useEffect(()=>{
      async function fetchData(){
      const res = await fetch('http://dummy.restapiexample.com/api/v1/employees');
      res
      .json()
      .then(res => setUsers(res.data))
      .catch(()=>setErrors(true))
      }
      fetchData();
    },[items]);
    




    return (
      <div className="App">
          {items.map((item,index)=>{
              return <li key={item.id}>{item.employee_name}</li>
          })}
          {/* {
            JSON.stringify(items).map((item,index)=>{
              <li>{item.employee_name}</li>
            })
          } */}
          
    
          {JSON.stringify(errors)}
      </div>
    );
}

export default App;
