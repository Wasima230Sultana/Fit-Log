import React from 'react';
import banner from '@/app/assets/banner.png'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto flex justify-between items-center my-4 bg-[#222630] p-5 rounded-xl'>
            <div className='space-y-5'>
                <p className='text-[#C2F800]'>WORKOUT LIBRARY</p>
                <h2 className='font-extrabold text-5xl'>TRAIN WITH INTENT. LOG <br></br>
EVERY SET.</h2>
<p className='text-[#9CA3AF] '>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br></br>
into today's plan, and watch the week's work add up.</p>
<button className='btn p-3 bg-[#C2F800] text-black'>BROWSE WORKOUTS</button>
            </div>


            <div>
                <Image src={banner} alt='banner' width={400} height={150}
                ></Image>
            </div>
        </div>
    );
};

export default Banner;