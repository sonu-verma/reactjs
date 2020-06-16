import React, { Component,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';

function App()  {

    const [inputList, setInputList] = useState();
    const [items, setItems] = useState([]);
    const InputEvent = (event) => {
      setInputList(event.target.value);
    }

    const addToDoList = (event) => {
      event.preventDefault();

      if(inputList > ''){
          setItems((oldItems) => {
            return [...oldItems,inputList];
          })
          setInputList("");
      }else{
          alert("Please enter TODO List.");
          return false;
      }
     
    }

    const deleteItems = (id) =>{
      setItems((oldItems)=>{
          return oldItems.filter((arr,item)=>{
            return item !== id;
          })
      })
    }
    return (
      <div className="main-div">
            <form onSubmit={addToDoList}>
              <h2 className="heading">ToDo List</h2>
              <input type='text' onChange={InputEvent} value={inputList} placeholder="Add a button" />
              <button type="submit"> + </button>

              
            </form>
            <ol>
                  {/* <li>{inputList}</li> */}

                  {
                    items.map((item,index)=>{
                       return  <ToDoList key={index} id={index} text={item} onSelect={deleteItems} />
                    })
                  }
              </ol>
      </div>
    );
}

export default App;
