import LaterButton from '@/app/Components/ButtonDetails/LaterButton';
import TodayButton from '@/app/Components/ButtonDetails/TodayButton';
import { IWorkOuts } from '@/app/Type/type';
import Image from 'next/image';
export interface IWorkoutsDetails {
    params: Promise<{
        workId: string
    }>
}
const getData = async (): Promise<IWorkOuts[]> => {
    try {
        const res = await fetch(`https://api.abcz.workers.dev/api/fitlog`)
        const data = await res.json()
        return data
    }
    catch {
        return []
    }

}
const WorkoutsDetails = async ({ params }: IWorkoutsDetails) => {
    const { workId } = await params;
    const works = await getData();
    const work = works.find((w) => String(w.id) === String(workId)) as IWorkOuts;

    // console.log(work)
    return (
        <div className='space-y-6 my-6 px-10 '>
            <div className="card md:card-side bg-base-100 shadow-sm gap-5 ">
                <figure>
                    <Image className='w-full p-1 rounded-2xl' src={work.image} alt='Image' width={400} height={100}></Image>
                </figure>
                <div className="card-body p-1">
                    <h2 className="card-title font-extrabold text-4xl">{work.name}</h2>
                    <p className='text-[#9CA3AF]'>{work.description}</p>
                    <div className="flex items-center gap-2 ">
                        {work.muscleGroups.map((muscle) => (
                            <button className='btn rounded-4xl bg-[#C2F800] text-black' key={muscle}>
                                {muscle}
                            </button>
                        ))}
                    </div>

                    <div className='border-2 border-gray-400 rounded-2xl'>
                        <div className='flex justify-between items-center px-8'>
                            <p className='text-[#9CA3AF] font-bold text-sm pt-4'>EQUIPMENT</p>
                            <span className='text-[16px]'>{work.equipment}</span>
                        </div>
                        <div className="divider"></div>

                        <div className='flex justify-between items-center px-8'>
                            <p className='text-[#9CA3AF] font-bold text-sm'>DIFFICULTY</p>
                            <span className='text-[16px]'>{work.difficulty}</span>
                        </div>
                        <div className="divider"></div>

                        <div className='flex justify-between items-center px-8'>
                            <p className='text-[#9CA3AF] font-bold text-sm'>SET</p>
                            <span className='text-[16px]'>{work.sets}</span>
                        </div>
                        <div className="divider"></div>

                        <div className='flex justify-between items-center px-8'>
                            <p className='text-[#9CA3AF] font-bold text-sm'>REPS</p>
                            <span className='text-[16px]'>{work.reps}</span>
                        </div>
                        <div className="divider"></div>

                        <div className='flex justify-between items-center px-8'>
                            <p className='text-[#9CA3AF] font-bold text-sm'>DURATION</p>
                            <span className='text-[16px]'>{work.duration}</span>
                        </div>
                        <div className="divider"></div>

                        <div className='flex justify-between items-center px-8'>
                            <p className='text-[#9CA3AF] font-bold text-sm'>CALORIES</p>
                            <span className='text-[16px]'>{work.caloriesBurned}</span>
                        </div>
                        <div className="divider"></div>


                        <div className='flex justify-between items-center px-8'>
                            <p className='text-[#9CA3AF] font-bold text-sm pb-4'>RATING</p>
                            <span className='text-[16px]'>{work.rating}</span>
                        </div>

                    </div>


                    <div>
                        <p className='text-lg my-3 font-extrabold'>INSTRUCTIONS</p>
                        <div className="space-y-2 ">
                            {work.instructions.map((ins, idx) => (
                                <ul className=' ' key={idx}>
                                    <span className='text-[#9CA3AF]'>{idx + 1}. </span>  {ins}
                                </ul>
                            ))}
                        </div>
                    </div>

                    <div className="card-actions">
                      <TodayButton work={work}></TodayButton>
                      <LaterButton work={work}></LaterButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutsDetails;