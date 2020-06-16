import React, { useState } from 'react';

function Time(){
	
	const state =  useState();
    const curTime  = new Date().toLocaleTimeString();
    const [ctime,setCState] = useState(curTime);

    const updatedTimeFunction= () => {
        const updatedTime  = new Date().toLocaleTimeString();
        setCState(updatedTime);
    }

    setInterval(updatedTimeFunction,1000);
	return ctime;
}

export default Time;