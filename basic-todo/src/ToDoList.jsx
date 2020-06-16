import React from 'react';

function ToDoList(props){
    return (
        <React.Fragment>
            <div className="todo_style">
                <span onClick={ ()=>{
                    props.onSelect(props.id)
                } }>x</span>
                <li>{props.text}</li>
            </div>
        </React.Fragment>
    );
}

export default ToDoList;