import React from 'react';
import Amazon from './Amazon';
import Netflix from './Netflix';

const fs = 2;
// function FavSeries(){
//   if(fs === 'netflix'){
//     return <Netflix />
//   }else{
//     return <Amazon />
//   }
// }


const App = () => {
  return (
      <React.Fragment>
        <h1 className="heading_style">List of top 5 Netflix series of 2020</h1>
         
        { /* <FavSeries />  */}
        {fs === 1 ?<Netflix type={fs} /> : <Amazon type={fs} /> }
    </React.Fragment>
  );
}


export default App;



//  <div className="cards">
//         {Sdata.map((vals,index)=>{
//           return (<Cards 
//             key = {index}
//             imgSrc = {vals.imgSrc}
//             category = {vals.category}
//             title = {vals.title}
//             link = {vals.link}
//           />);
//         })}
//         </div>