import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
const fname = 'Sonu verma';
const currentDate = new Date().toLocaleDateString();
const currenrTime = new Date().toLocaleTimeString();

let curTime = new Date(2020,6,5,23);
curTime = curTime.getHours();

let greeting = '';

if(curTime >= 1 && curTime < 12){
	greeting = 'Good Morning';
}else if(curTime >=12 && curTime < 20){
	greeting = 'Good Evening';
}else{
	greeting = 'Good Night';
}
ReactDOM.render(
		<React.Fragment>
			<h1>{ `hello ${fname} , your Netflix list`}</h1>
			<p>Here is my Netflix list of my  favourite</p>
			<ol>	
				<li>TEST1</li>
				<li>TEST2</li>
				<li>TEST3</li>
				<li>TEST4</li>
				<li>TEST5</li>
			</ol>

			<h1>{ `Current Date: ${ currentDate}`}</h1>
			<h1>{ `Current Time: ${ currenrTime}`}</h1>
			<div className="demo">
			<h1>{ `Hello sir, ${greeting}`}</h1>
			</div>
		</React.Fragment>
		,document.getElementById("root")
	);