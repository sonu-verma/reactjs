// import React, { Component } from 'react';
import React, { useState } from 'react'
import logo from './logo.svg';
import Time from './Time';
import './App.css';
import './index.css';

const SlotMachine = () => {

    // let x = GetValue()[5];
    // let y = GetValue()[2];
    // let z = GetValue()[6];


    let [x,y,z] = GetValue();
    if((x === y) && (y === z)){
        return (
          <React.Fragment>
              <div className="slotMachine success">
                  <h1> {x } {y } {z} </h1>
                  <h1> This is matching </h1>
              </div>
          </React.Fragment>
        );
    }else{
     return (
              <React.Fragment>
                  <div className="slotMachine">
                      <h1> {x } {y } {z} </h1>
                      <h1> This is not matching </h1>
                  </div>
              </React.Fragment>
        );
    }
}

function GetValue(){
  const someArray = [6,5,7,6,1,5,1,7,1,6,5,7];

    someArray.sort(() => Math.random() - 0.5);

    return someArray;
}

function App() {

    const state =  useState();
    const curTime  = new Date().toLocaleTimeString();
    const [ctime,setCState] = useState(curTime);

    const REfresh= () => {
        const updatedTime  = new Date().toLocaleTimeString();
        setCState(updatedTime);
    }
    
   return (
      <React.Fragment>
          <h1 className="heading_style" >
          Welcome To
            <span>
              <img style={{ height: "30px",padding: "5px",paddingLeft: "31px", paddingRight: "23px" }} src="https://cdn.iconscout.com/icon/premium/png-256-thumb/slot-machine-2242242-1877483.png" alt="slotMachine" />
            </span>
            <span style={{ fontSize:"30px",fontSize: "56px", color:"red"}}>Slot Machine Game</span>
          </h1>
        
          <div className="sMaching">
             <h3><Time /></h3>
             <hr />
            <SlotMachine />
            <hr />
            <SlotMachine />
            <hr />
            <SlotMachine />
            <hr />
             <button onClick={REfresh}>Spin</button>
          </div>


      </React.Fragment>

      
    );
}

export default App;
