import AnimatedWrapper from "@/components/AnimatedWrapper";
import VideoBackground from "@/components/VideoTwoBackground";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/2");
  };
  return (
    <div
      className="h-screen relative w-screen flex flex-col gap-8 justify-center items-center text-white"
      onClick={handleRoute}
    >
      <VideoBackground />

      <div className="z-10 h-full w-full flex flex-col gap-8 justify-center items-center bg-slate-800 backdrop-filter backdrop-blur-md bg-opacity-30">
        <AnimatedWrapper>
          <div className="flex flex-col gap-8 justify-center items-center">
            <h1 className="font-semibold text-4xl">Hey Muleba</h1>
            <p className="text-xl">
              You brighten my day more than sunshine itself!
            </p>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
