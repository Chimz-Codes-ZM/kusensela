import React from "react";
import { useRouter } from "next/router";
import VideoBackground from "@/components/VideoThreeBackground";
import AnimatedWrapper from "@/components/AnimatedWrapper";

const pageTwo = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/3");
  };
  return (
    <div
      className="h-screen w-screen justify-center text-center items-center text-white bg-slate-800 backdrop-filter backdrop-blur-md bg-opacity-30"
      onClick={handleRoute}
    >
      <VideoBackground />
      
        <div className="bg-slate-800 backdrop-filter flex flex-col gap-8 text-3xl justify-center px-4 backdrop-blur-md bg-opacity-30 w-full h-full"><AnimatedWrapper>
          <h1>There's something so special about you...</h1>
          <br />
          <br />
          <p className="text-xl text-start">
            I seem to love every little thing about you. You bring so much joy
            and 
            positivity into everybody's life, and I find myself thinking about
            you often. Your laughter is like music to my ears, and your smile
            lights up my day. Nevermind the fact that you're drop dead gorgeous.{" "}
            The most beautiful woman in the world and that's an
            understatement. So I was just wondering one thing....
          </p>
        </AnimatedWrapper></div>
      
    </div>
  );
};

export default pageTwo;
