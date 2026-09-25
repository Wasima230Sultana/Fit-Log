'use client'
import { WorkoutContext } from '@/app/context/page';
import { IWorkOuts } from '@/app/Type/type';
import React, { useContext } from 'react';
import { FaBookmark } from 'react-icons/fa';

const LaterButton = ({work}:{work:IWorkOuts}) => {
    const {laterList, setLaterList} = useContext(WorkoutContext)
    const handleLaterList=()=>{
setLaterList([...laterList,work])
    }
    return (
        <div>
     <button onClick={()=>handleLaterList()} className="btn border-mist-500"><FaBookmark />Save for later</button>

        </div>
    );
};

export default LaterButton;