import React, { Component, useState } from 'react';

function Form(){
    // use on submit funtion 
    const [Fullname , setFullname] = useState({
        fname:'',
        lname:'',
        email:'',
        phone:''
    });
    
    const inputEvent = (event) => {
        // const value = event.target.value;
        // const name  = event.target.name;

        const { value,name } =  event.target;
        setFullname((preValue) => {
            // if(name == 'Fname'){
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     }
            // }else if(name == 'Lname'){
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     }
            // }else if(name == 'email'){
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phone: preValue.phone
            //     }
            // }else if(name == 'phone'){
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: value
            //     }
            // }

            return {
                ...Fullname,
                [name]:value
            }
        } );
        
    }

   

    const onSubmit = (event) => {
      event.preventDefault();
        alert('ho gaya');
    }

    return (
      <React.Fragment>
        <div className="main-div">
          <h3>Hello {Fullname.fname} {Fullname.lname}<br />
            {Fullname.email}<br />
            {Fullname.phone}
          </h3>
         
          <form onSubmit={onSubmit}>
            <input type="text" name="fname" placeholder="Enter Your Name" onChange={inputEvent} value={Fullname.fname} /><br />
            <input type="text" name="lname" placeholder="Enter Your Last Name" onChange={inputEvent} value={Fullname.lname} /><br />
            <input type="email" name="email" placeholder="Enter Your Email" onChange={inputEvent} value={Fullname.email} /><br />
            <input type="number" name="phone" placeholder="Enter Your Phone" onChange={inputEvent} value={Fullname.phone} /><br />
            <button type="submit">SUBMIT ME 👍</button>
          </form>
        </div>
      </React.Fragment>
    );
  }

export default Form;
