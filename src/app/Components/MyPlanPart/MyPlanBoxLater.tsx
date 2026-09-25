'use client'

import { WorkoutContext } from "@/app/context/page";
import { useContext } from "react";

const MyPlanBoxLater = () => {
    const {laterList,setLaterList} = useContext(WorkoutContext)
    const totalCalories = 
    laterList.reduce((total, workout) => total + workout.caloriesBurned, 0);
        const totalTime = 
    laterList.reduce((total, workout) => total + workout.duration, 0);
    return (
        <div>
            <div className='my-2 flex justify-between items-center p-5 rounded-2xl border-2 border-gray-600 shadow-2xl'>
                <div>
                    <p className='text-[#8A92A0]'>ExercisesLater</p>
                    <p className='text-4xl text-[#CCFF00] font-bold'>{laterList.length}</p>
                </div>

                <div>
                    <p className='text-[#8A92A0]'>Minutes</p>
                    <p className='text-4xl text-[#FFFFFF] font-bold'>{totalTime}</p>
                </div>

                <div>
                    <p className='text-[#8A92A0]'>Calories</p>
                    <p className='text-4xl text-[#FFFFFF] font-bold'>{totalCalories}</p>

                </div>
            </div>
        </div>
    );
};

export default MyPlanBoxLater;