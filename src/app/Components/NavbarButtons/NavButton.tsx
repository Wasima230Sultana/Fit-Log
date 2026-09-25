'use client'
import { WorkoutContext } from '@/app/context/page';
import Link from 'next/link';
import React, { useContext } from 'react';

const NavButton = () => {
    const {todayList,laterList} = useContext(WorkoutContext);
    return (
        <div className='flex items-center gap-1 '>
            <div>
                 <Link href={'/my-plan'}>
            <button className='btn rounded-2xl'>Plan {todayList.length}</button>
            </Link>
            </div>
           <div>
        <button className='btn rounded-2xl'>Saved {laterList.length}</button>

           </div>
        
        </div>
    );
};

export default NavButton;