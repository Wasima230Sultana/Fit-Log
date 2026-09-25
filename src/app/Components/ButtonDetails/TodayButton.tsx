'use client'
import { WorkoutContext } from '@/app/context/page';
import { IWorkOuts } from '@/app/Type/type';
import { useContext } from 'react';
import { FaCalendarPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

const TodayButton = ({work}:{work:IWorkOuts}) => {
    const {todayList,setTodayList} = useContext(WorkoutContext)
    const handleTodayList=()=>{
        const checkList = todayList.find((t)=>String(t.id) === String(work.id)) as IWorkOuts;
        if(checkList){
           toast.error("Already added this item");

        }else{
  setTodayList([...todayList,work])
           toast.success(`Add "${work.name}" in today's plan`);
        }
        
      
        
    }
    return (
        <div>
              <button onClick={()=>handleTodayList()} className="btn bg-[#CCFF00] text-black "> <FaCalendarPlus />Add to today's plan</button>
        </div>
    );
};

export default TodayButton;