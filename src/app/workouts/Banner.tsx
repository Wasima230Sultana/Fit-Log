'use client'
import banner from '@/app/assets/banner.png';
import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';

const Banner = () => {

    const handleScroll = () => {
        const library = document.getElementById('library');
         if (library)
             { library.scrollIntoView({ behavior: 'smooth', block: 'start', }); }
    };
    return (
        <section className=" my-4 p-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left bg-[#222630] p-6 md:p-10 rounded-xl">

                {/* Left Content */}
                <div className="space-y-5">

                    <p className="text-[#C2F800] font-semibold tracking-widest">
                        WORKOUT LIBRARY
                    </p>

                    <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
                        TRAIN WITH INTENT. LOG
                        <br />
                        EVERY SET.
                    </h2>

                    <p className="text-[#9CA3AF] leading-relaxed">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        <br className="hidden md:block" />
                        lock it into today's plan, and watch the week's work add up.
                    </p>
                    <button onClick={handleScroll} className="btn bg-[#C2F800] text-black border-none hover:bg-[#b5df00]" > BROWSE WORKOUTS <FaArrowDown /> </button>


                </div>

                {/* Banner Image */}
                <div className="w-full md:w-[35%]">
                    <Image
                        src={banner}
                        alt="Workout banner"
                        width={550}
                        height={300}
                        className="w-full h-auto object-cover"

                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;

