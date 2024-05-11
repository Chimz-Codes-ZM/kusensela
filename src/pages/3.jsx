import React, { useState } from "react";
/* eslint-disable */
import { useRouter } from "next/router";
import VideoBackground from "@/components/VideoTwoBackground";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import Confetti from "react-confetti";

const pageThree = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const yesRoute = () => {
    setIsClicked(true);

    setTimeout(() => {
      router.push("/yes");
    }, 3000);
  };

  const noRoute = () => {
    router.push("/no");
  };
  return (
    <div className="relative h-screen w-screen flex flex-col  ">
      <VideoBackground />

      <div className="w-full h-full flex flex-col justify-center text-white px-4 items-center gap-8 bg-slate-800 backdrop-filter backdrop-blur-md bg-opacity-30">
        <AnimatedWrapper>
          <div className="w-full h-full flex flex-col justify-center text-white px-4 items-center gap-8 ">
            <h1>Just one more thing I need to ask....</h1>
            <p className="text-3xl font-semibold">
              Will You Do Me The Honor of Being My Girlfriend??
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <button
                className="bg-yellow-600 rounded-lg shadow-md p-2 px-4 min-w-32 text-white animate-bounce"
                onClick={yesRoute}
              >
                Yes
              </button>
              <button
                className="bg-blue-500 rounded-lg shadow-lg p-2 px-4 min-w-32 text-white"
                onClick={noRoute}
              >
                Maybe?
              </button>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
      {isClicked && <Confetti />}
    </div>
  );
};

export default pageThree;
