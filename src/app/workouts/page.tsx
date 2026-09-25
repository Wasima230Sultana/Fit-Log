import React from 'react';
import { IWorkOuts } from '../Type/type';
import WorkoutsCard from '../Components/homepage/WorkoutsCard';

const getData = async (): Promise<IWorkOuts[]> => {
    try {
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
        const data = await res.json()
        return data
    }
    catch {
        return []
    }

}
const WorkOuts = async () => {
    const workData = await getData();
    console.log(workData.length)
    return (
        <div className='my-4 max-w-7xl mx-auto p-4'>
            <div className='my-6'>
                <h2 className='text-5xl font-extrabold'>THE LIBRARY</h2>
                <p className='text-mauve-400'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
    workData.map((work)=>
    <WorkoutsCard 
    key={work.id} work={work} 
    />
    )
}
 
            </div>
       </div>
    );
};

export default WorkOuts;