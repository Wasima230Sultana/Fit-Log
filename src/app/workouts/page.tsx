import React from 'react';

const getData = async()=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data  = await res.json()
    return data 
}
const page = async() => {
    const workData = await getData();
    console.log(workData)
    return (
        <div>
            
        </div>
    );
};

export default page;