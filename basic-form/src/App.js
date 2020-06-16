import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
    // use on submit funtion 
    const [name , setName] = useState("");
    const [lastname , setLastName] = useState("");

    // use for display only
    const [fname , setFirstname] = useState("");
    const [lname , setLastname] = useState("");
     
    const inputEvent = (event) => {
      setName(event.target.value);
    }

    const inputEventTwo = (event) => {
      setLastName(event.target.value);
    
    }

    const onSubmit = (event) => {
      event.preventDefault();
      setFirstname(name);
      setLastname(lastname);

      let newArr = {
        'first_name': fname,
        'last_name': lname
      }

      console.log(newArr);
    }

    return (
      <React.Fragment>
        <div className="main-div">
          <h3>Hello {fname} {lname}</h3>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value= {name} /><br />
            <input type="text" placeholder="Enter Your Last Name" onChange={inputEventTwo} value= {lastname} /><br />
            <button type="submit">SUBMIT ME 👍</button>
          </form>
        </div>
      </React.Fragment>
    );
  }

export default App;
