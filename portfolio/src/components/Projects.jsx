import React from "react";
import { AnimatedBorder } from "./ui/AnimatedBorder/AnimatedBorder";
import plantShop from "../assets/images/plantShop.png";
import posterPrint from "../assets/images/posterPrint.png";
import { GetSvg } from "./GetSvg";

const Projects = () => {
  return (
    <div className="flex flex-col mt-10 z-21">
      <h2 className="font-bold text-xl">Projects</h2>
      <AnimatedBorder>
        <div className="p-2 flex  w-full justify-between">
          <a
            className="duration-300 z-21 shadow ml-2  hover:scale-103"
            href="https://vladkovach.github.io/plantShop/"
            target="_blank"
          >
            <img className="w-60  rounded-projectImg  " src={plantShop} alt="PlantShop"></img>
          </a>
          <div className="w-3/5">
            <div className="font-bold text-2xl inline-flex items-center">
              <span className="mr-2 text-customOrange">Planty</span>
              <GetSvg svg="external" />
            </div>
            <p className="mt-3">Layout for Online Shop. Beauty styled and adaptive for mobile</p>
            <div className="">{/* svgs */}</div>
          </div>
        </div>
      </AnimatedBorder>
      <AnimatedBorder>
        <div className="">
          <img src={posterPrint} alt="PosterPrint"></img>
          <div className="">
            <p className="font-bold">PosterPrint</p>
            <p>Description</p>
            <div className="">{/* svgs */}</div>
          </div>
        </div>
      </AnimatedBorder>
      <AnimatedBorder>
        <div className="p-2">
          <img src="" alt="2event"></img>
          <div className="">
            <p className="font-bold">Gallery</p>
            <p>Description</p>
            <div className="">{/* svgs */}</div>
          </div>
        </div>
      </AnimatedBorder>

      <AnimatedBorder>
        <div className="">
          <img src="" alt="Freelance"></img>
          <div className="">
            <p className="font-bold">MortarAnimation</p>
            <p>Description</p>
            <div className="">{/* svgs */}</div>
          </div>{" "}
        </div>
      </AnimatedBorder>
    </div>
  );
};

export default Projects;
