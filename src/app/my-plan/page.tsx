import React from 'react';

const MyPlanPage = () => {
    return (
        <div className='max-w-8xl mx-auto my-8 p-6 md:px-20'>
            <div className='my-2'>
                <h1 className='text-4xl font-extrabold'>MY PLAN</h1>
                <p className='text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className='my-2 flex justify-between items-center p-5 rounded-2xl border-2 border-gray-600 shadow-2xl'>
                <div>
                    <p className='text-[#8A92A0]'>Exercises</p>
                    <p className='text-4xl text-[#CCFF00] font-bold'>2</p>
                </div>

                <div>
                    <p className='text-[#8A92A0]'>Minutes</p>
                    <p className='text-4xl text-[#FFFFFF] font-bold'>150</p>
                </div>

                <div>
                    <p className='text-[#8A92A0]'>Calories</p>
                    <p className='text-4xl text-[#FFFFFF] font-bold'>340</p>

                </div>
            </div>
            <div className='my-10'>
                {/* name of each tab group should be unique */}
<div className="tabs tabs-box">
  <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's Plan" />
  <div className="tab-content bg-base-100 border-base-300 p-6"> Today's Plan</div>

  <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab Saved</div>

</div>
            </div>
        </div>
    );
};

export default MyPlanPage;