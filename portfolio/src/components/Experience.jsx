import React from "react";
import { AnimatedBorder } from "./ui/AnimatedBorder/AnimatedBorder";

const Experience = () => {
  return (
    <div className="flex flex-col mt-10">
      <h2 className="font-bold text-xl">Projects</h2>
      <AnimatedBorder>
      <div className="p-2">
        <div className="flex justify-between">
        <p className="font-bold">2event</p>
        <div className="shadow shadow-grayLight">123123123123</div>

        </div>
      </div>

      </AnimatedBorder>
      <AnimatedBorder>
      <div className="">
      <p className="font-bold">PosterPrint</p>

      </div>

      </AnimatedBorder>
      <AnimatedBorder>
      <div className="">
      <p className="font-bold">Freelance</p>
        
      </div>

      </AnimatedBorder>
    </div>
  );
};

export default Experience;
