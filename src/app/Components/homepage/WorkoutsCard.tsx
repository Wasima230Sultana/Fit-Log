import { IWorkOuts } from '@/app/Type/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiClock1, CiStar } from 'react-icons/ci';
import { FaFire } from 'react-icons/fa';


const WorkoutsCard = ({ work }: { work: IWorkOuts }) => {
    const { id, name, image, muscleGroups, equipment, description, difficulty, duration, caloriesBurned, sets, rating, reps, instructions } = work
    return (
        <div>
            <Link href={`/workouts/${id}`}>
               <div className="card bg-base-100 border-2 shadow-sm">
                <figure>
                    <Image className='w-full' src={image} alt='Exercise' width={200} height={50}
                    ></Image>
                </figure>

                <div className="card-body">
                    <div className="flex items-center gap-2 ">
                        {muscleGroups.map((muscle) => (
                            <button className='btn rounded-4xl bg-[#C2F800] text-black' key={muscle}>
                                {muscle}
                            </button>
                        ))}
                    </div>
                    <h2 className="card-title">{name}</h2>
                    <p>{equipment}</p>
                    <div className="divider"></div>

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
            </Link>
         
        </div>
    );
};

export default WorkoutsCard;