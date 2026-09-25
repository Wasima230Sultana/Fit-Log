import { IWorkOuts } from '@/app/Type/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiClock1, CiStar } from 'react-icons/ci';
import { FaFire } from 'react-icons/fa';
import { MdCancel, MdDone } from 'react-icons/md';

const MyPlanCard = ({ work }: { work: IWorkOuts }) => {
    const { id, name, image, equipment,duration, caloriesBurned,rating } = work

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
                <Link className='btn rounded-2xl bg-[#CCFF00] text-black' href={`/workouts/${id}`}><MdDone className='text-xl'/>Mark as Done</Link>
                <Link href={`/workouts/${id}`} className='text-2xl'><MdCancel /></Link>

            </div>
            </div>




        </div>
    );
};

export default MyPlanCard;