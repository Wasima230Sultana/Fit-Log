'use client'
import { WorkoutContext } from '@/app/context/page';
import Link from 'next/link';
import React, { useContext } from 'react';

const NavButton = () => {
    const {todayList,laterList} = useContext(WorkoutContext);
    return (
        <div className='flex items-center gap-1 md:gap-4 '>
            <div>
                 <Link href={'/my-plan'}>
            <p className=' rounded-2xl'>Plan <span className='btn rounded-full bg-[#C2F800] text-black'> {todayList.length}</span></p>
            </Link>
            </div>
           <div>
        <p className=' rounded-2xl'>Saved <span className='btn rounded-full border-2 border-mist-600'>  {laterList.length}</span></p>

           </div>
        
        </div>
    );
};

export default NavButton;