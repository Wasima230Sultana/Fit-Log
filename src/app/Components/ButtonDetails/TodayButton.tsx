'use client'
import { WorkoutContext } from '@/app/context/page';
import { IWorkOuts } from '@/app/Type/type';
import { useContext } from 'react';
import { FaCalendarPlus } from 'react-icons/fa';

const TodayButton = ({work}:{work:IWorkOuts}) => {
    const {todayList,setTodayList} = useContext(WorkoutContext)
    const handleTodayList=()=>{
        // const list = [...todayList]
        setTodayList([...todayList,work])
    }
    return (
        <div>
              <button onClick={()=>handleTodayList()} className="btn bg-[#CCFF00] text-black "> <FaCalendarPlus />Add to today's plan</button>
        </div>
    );
};

export default TodayButton;