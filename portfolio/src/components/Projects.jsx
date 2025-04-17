import React from "react";
import { AnimatedBorder } from "./ui/AnimatedBorder/AnimatedBorder";

const Projects = () => {
  return (
    <div className="flex flex-col mt-10">
      <h2 className="font-bold text-xl">Projects</h2>
      <AnimatedBorder>
        <div className="p-2">
          <img src="" alt="2event"></img>
          <div className="">
            <p className="font-bold">2event</p>
            <p>Frontend Developer</p>
            <p>Description</p>
            <div className="">{/* svgs */}</div>
          </div>
        </div>
      </AnimatedBorder>
      <AnimatedBorder>
        <div className="">
          <img src="" alt="2event"></img>
          <div className="">
            <p className="font-bold">PosterPrint</p>
            <p>Frontend Developer</p>
            <p>Description</p>
            <div className="">{/* svgs */}</div>
          </div>
        </div>
      </AnimatedBorder>
      <AnimatedBorder>
        <div className="">
          <img src="" alt="Freelance"></img>
          <div className="">
            <p className="font-bold">Freelance</p>
            <p>Frontend Developer</p>
            <p>Description</p>
            <div className="">{/* svgs */}</div>
          </div>{" "}
        </div>
      </AnimatedBorder>
    </div>
  );
};

export default Projects;
