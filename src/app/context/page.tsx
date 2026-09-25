'use client'

import { createContext, ReactNode, useState } from "react";
import { IWorkOuts } from "../Type/type"

interface IWorkoutContext{
    todayList : IWorkOuts[],
    setTodayList: React.Dispatch<React.SetStateAction<IWorkOuts[]>>;
  laterList: IWorkOuts[];
  setLaterList: React.Dispatch<React.SetStateAction<IWorkOuts[]>>;
}

export const WorkoutContext= createContext<IWorkoutContext>({
todayList:[],
setTodayList:()=>[],
laterList:[],
setLaterList:()=>[],
}
)
const WorkoutProvider = ({children}:{children:ReactNode})=>{
const [todayList,setTodayList] = useState<IWorkOuts[]>([]);
const [laterList,setLaterList] = useState<IWorkOuts[]>([]);

const sharedData = {
    todayList,
    setTodayList,
    laterList,
    setLaterList
}
return (
    <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
)
}
export default WorkoutProvider;