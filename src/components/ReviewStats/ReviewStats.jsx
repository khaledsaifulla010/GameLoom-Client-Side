import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaUsers, FaGamepad, FaStar } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";

const ReviewStats = () => {
  const [counterState, setCounterState] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterState(true)}
      onExit={() => setCounterState(false)}
    >
      <div className="bg-pink-100 text-gray-800 py-10 px-6 rounded-lg mt-24 flex flex-col md:flex-row justify-around items-center max-w-[1400px] mx-auto shadow-md transition-transform duration-1000 ease-in-out transform hover:shadow-[0px_15px_35px_rgba(0,0,0,0.5)] hover:scale-105 opacity-80">
        {/* Card 1: Active Users */}
        <div className="flex flex-col justify-center items-center flex-1 text-center max-w-[200px] mx-auto">
          <div className="text-5xl text-yellow-500 mb-3">
            <FaUsers />
          </div>
          <h2 className="text-4xl font-bold">
            {counterState && <CountUp start={0} end={1500} duration={2.5} />}+
          </h2>
          <p className="text-lg font-medium">Active Users</p>
        </div>

        <div className="w-full md:w-px bg-gray-300 h-0.5 md:h-16 my-6 md:my-0 hidden md:block"></div>

        {/* Card 2: Games Reviewed */}
        <div className="flex flex-col justify-center items-center flex-1 text-center max-w-[200px] mx-auto">
          <div className="text-5xl text-yellow-500 mb-3">
            <FaGamepad />
          </div>
          <h2 className="text-4xl font-bold">
            {counterState && <CountUp start={0} end={500} duration={2.5} />}+
          </h2>
          <p className="text-lg font-medium">Games Reviewed</p>
        </div>

        <div className="w-full md:w-px bg-gray-300 h-0.5 md:h-16 my-6 md:my-0 hidden md:block"></div>

        {/* Card 3: Reviews Submitted */}
        <div className="flex flex-col justify-center items-center flex-1 text-center max-w-[200px] mx-auto">
          <div className="text-5xl text-yellow-500 mb-3">
            <MdRateReview />
          </div>
          <h2 className="text-4xl font-bold">
            {counterState && <CountUp start={0} end={2500} duration={2.5} />}+
          </h2>
          <p className="text-lg font-medium">Reviews Submitted</p>
        </div>

        <div className="w-full md:w-px bg-gray-300 h-0.5 md:h-16 my-6 md:my-0 hidden md:block"></div>

        {/* Card 4: Average Rating */}
        <div className="flex flex-col justify-center items-center flex-1 text-center max-w-[200px] mx-auto">
          <div className="text-5xl text-yellow-500 mb-3">
            <FaStar />
          </div>
          <h2 className="text-4xl font-bold">
            {counterState && <CountUp start={0} end={4.8} duration={2.5} />}
          </h2>
          <p className="text-lg font-medium">Average Rating</p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default ReviewStats;
