'use client'
import { IWorkOuts } from '@/app/Type/type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { CiClock1, CiStar } from 'react-icons/ci';
import { FaFire } from 'react-icons/fa';
import { MdCancel, MdDone } from 'react-icons/md';
import { WorkoutContext } from '@/app/context/page';
import { toast } from 'react-toastify';

const MyPlanCard = ({ work, type }: { work: IWorkOuts, type: 'today' | 'later'; }) => {
    const { id, name, image, equipment, duration, caloriesBurned, rating } = work
    const { laterList, setLaterList, todayList, setTodayList } = useContext(WorkoutContext)
    const handleMarkDone = ()=>{
        toast.success(`"${name}" marked as done! `)
    }
    const handleRemove = () => {
        if (type === "later") {
            const updatedLater = laterList.filter((today) => String(today.id) !== String(work.id))
            setLaterList(updatedLater)
             toast.success(`"${work.name}" removed!`);
        }
        else if (type === "today") {
            const updatedToday = todayList.filter((today) => String(today.id) !== String(work.id))
            setTodayList(updatedToday)
             toast.success(`"${work.name}" removed!`);
        }

    }

    return (
        <div>

            <div className="flex flex-wrap md:justify-between items-center bg-base-100 border-2 shadow-sm px-3 rounded-2xl mt-1">
                <div className='flex gap-2 items-center'>
                    <div>
                        <figure>
                            <Image className='w-full rounded-2xl p-1' src={image} alt='Exercise' width={100} height={10}
                            ></Image>
                        </figure>
                    </div>


                    <div className="">

                        <h2 className="">{name}</h2>
                        <p>{equipment}</p>

                        <div className="card-actions flex justify-evenly items-center">
                            <div className='flex justify-center items-center gap-3'>
                                <CiClock1 className='text-xl text-[#9CA3AF]' />
                                <p className='text-[#9CA3AF]'>{duration}</p>
                            </div>
                            <div className='flex justify-center items-center gap-3'>
                                <FaFire className='text-xl text-[#9CA3AF]' />
                                <p className='text-[#9CA3AF]'>{caloriesBurned}</p>
                            </div>

                            <div className='flex justify-center items-center gap-3'>
                                <CiStar className='text-xl text-[#9CA3AF]' />

                                <p className='text-[#9CA3AF]'>{rating}</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='flex flex-wrap gap-2 items-center'>
                    <Link className='btn rounded-2xl border-mist-600' href={`/workouts/${id}`}>View Details</Link>
                    <button onClick={handleMarkDone} className='btn rounded-2xl bg-[#CCFF00] text-black' ><MdDone className='text-xl' />Mark as Done</button>
                    <div>
                        <button onClick={() => handleRemove()} className='text-2xl'><MdCancel />
                        </button>
                    </div>


                </div>
            </div>




        </div>
    );
};

export default MyPlanCard;