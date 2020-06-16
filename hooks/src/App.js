import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
function App() {

  const [ val,setValue]  = useState(0);

  const incVal = () =>{
    setValue((oldValue)=>{
        return oldValue+1;
    })
  }


  const decVal = () =>{
    setValue((oldValue)=>{
      if(val == 0){
          alert('ho gaya');
          setValue(0);
      }else{
        return oldValue-1;
      }
      
  })
  }
    return (
      <div className="main-div">
          <h1 className="heading">{val}</h1>
          <button onClick={incVal}>Increament</button>  <button onClick={decVal}> Decrement</button>
      </div>
    );
}

export default App;
