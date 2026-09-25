'use client';

import { useContext, useState } from 'react';
import { WorkoutContext } from '../context/page';
import MyPlanBoxToday from '../Components/MyPlanPart/MyPlanBoxToday';
import MyPlanBoxLater from '../Components/MyPlanPart/MyPlanBoxLater';
import MyPlanCard from '../Components/MyPlanPart/MyPlanCard';

const MyPlanPage = () => {
    const {
        todayList,
        laterList,
    } = useContext(WorkoutContext);

    const [toggle, setToggle] = useState(false);

    return (
        <div className="max-w-8xl mx-auto my-8 p-6 md:px-20">

            <div className="my-2">
                <h1 className="text-4xl font-extrabold">
                    MY PLAN
                </h1>

                <p className="text-[#8A92A0]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>
            <div>
                { toggle? <MyPlanBoxToday></MyPlanBoxToday> :<MyPlanBoxLater></MyPlanBoxLater> }
            </div>
            <div className="my-10">

                <div className="tabs tabs-box">

                    {/* Today's Plan Tab */}
                    <input
                        type="radio"
                        name="my_tabs_6"
                        className="tab"
                        aria-label="Today's Plan"
                        checked={toggle}
                        onChange={() => setToggle(true)}
                    />

                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        {todayList.length === 0 ? (
                            <div className="text-center space-y-4 mt-4">
                                <h2 className="font-extrabold text-2xl">
                                    NOTHING HERE YET
                                </h2>

                                <p className="text-[#A1A1AA]">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <button className="btn rounded-4xl bg-[#C2F10D] text-black">
                                    Go to workouts
                                </button>
                            </div>
                        ) : (
                            todayList.map((work, idx) => (
                                <MyPlanCard
                                    key={idx}
                                    work={work}
                                />
                            ))
                        )}

                    </div>


                    {/* Saved Tab */}
                    <input
                        type="radio"
                        name="my_tabs_6"
                        className="tab"
                        aria-label="Saved"
                        checked={!toggle}
                        onChange={() => setToggle(false)}
                    />

                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        {laterList.length === 0 ? (
                            <div className="text-center space-y-4 mt-4">
                                <h2 className="font-extrabold text-2xl">
                                    NOTHING HERE YET
                                </h2>

                                <p className="text-[#A1A1AA]">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <button className="btn rounded-4xl bg-[#C2F10D] text-black">
                                    Go to workouts
                                </button>
                            </div>
                        ) : (
                            laterList.map((work, idx) => (
                                <MyPlanCard
                                    key={idx}
                                    work={work}
                                />
                            ))
                        )}

                    </div>

                </div>

            </div>
        </div>
    );
};

export default MyPlanPage;