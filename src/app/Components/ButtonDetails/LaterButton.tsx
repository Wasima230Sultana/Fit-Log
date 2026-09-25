'use client'
import { WorkoutContext } from '@/app/context/page';
import { IWorkOuts } from '@/app/Type/type';
import React, { useContext } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';

const LaterButton = ({work}:{work:IWorkOuts}) => {
    const {laterList, setLaterList} = useContext(WorkoutContext)
    const handleLaterList=()=>{
          const checkList = laterList.find((t)=>String(t.id) === String(work.id)) as IWorkOuts;
          if(checkList){
        toast.error("Already added this item");
          }else{
            setLaterList([...laterList,work])
   toast.success(`Saved "${work.name}" in later plan`);
          }


    }
    return (
        <div>
     <button onClick={()=>handleLaterList()} className="btn border-mist-500"><FaBookmark />Save for later</button>

        </div>
    );
};

export default LaterButton;