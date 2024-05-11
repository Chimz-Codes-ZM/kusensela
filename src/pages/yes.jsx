/* eslint-disable */
import AnimatedWrapper from "@/components/AnimatedWrapper";
import React from "react";
import { useRouter } from "next/router";
import VideoBackground from "@/components/VideoYes";

const yes = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/");
  };
  return (
    <div
      className="h-screen w-screen justify-center text-center items-center text-white bg-slate-800 backdrop-filter backdrop-blur-md bg-opacity-30"
      onClick={handleRoute}
    >
      <VideoBackground />

      <div className="bg-slate-800 backdrop-filter flex flex-col gap-8 text-3xl justify-center px-4 backdrop-blur-md bg-opacity-30 w-full h-full">
        <AnimatedWrapper>
          <h1>😊 you&apos;ve made the right choice!</h1>
          <br />
          <br />
          <p className="text-xl text-start">
            You honestly make my days, and I can&apos;t wait to create all the
            wonderful memories with you. Thank you for making me the happiest
            person in the world right now! 💕💕
          </p> 
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default yes;
