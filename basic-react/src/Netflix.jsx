import React from 'react';
import Sdata from './Sdata';
import Cards from './Cards';


const Netflix = (props)  => {
	console.log("netlfix",props);
	return (
		 <div className="cards">
	        {Sdata.map((vals,index)=>{
	        		if(vals.type  == 1){
	        			return (<Cards 
				            key = {index}
				            imgSrc = {vals.imgSrc}
				            category = {vals.category}
				            title = {vals.title}
				            link = {vals.link}
				          />
				        );
	        		}
		 
	        })}
  		</div>
	);
}


export default Netflix;

