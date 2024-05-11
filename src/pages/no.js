import React from "react";
import { useRouter } from "next/router";

const no = () => {
  const router = useRouter();

  const handleReRoute = () => {
    router.push("/3");
  };
  return (
    <div className="flex flex-col h-screen w-screen text-xl justify-center items-center px-4">
      Eh! Maybe you just forgot the answer. Try answering
      <span className="cursor-pointer underline" onClick={handleReRoute}>
        
        again?
      </span>
    </div>
  );
};

export default no;
