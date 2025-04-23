import React from "react";
import { AnimatedBorder } from "./ui/AnimatedBorder/AnimatedBorder";
import posterPrint from "../assets/images/posterPrint.png";
import { GetSvg } from "./GetSvg";

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col mt-10 z-21 scroll-mt-20">
      <h2 className="font-bold text-xl">Experience</h2>
      <AnimatedBorder classNames='mb-40'>
        <div className="p-2 flex  w-full justify-between">
          <div className=" relative flex flex-col">
            <span className="font-bold absolute top-[-12px] left-6">01.2023</span>
            <div className="relative ml-[6px] border-l-[3px] h-50 border-grayLight  before:content-['']  before:absolute before:top-[-5px] before:left-[-7.5px]  before:w-3 before:h-3 before:rounded-full before:bg-grayLight 
             after:content-['']  after:absolute after:bottom-[-5px] after:left-[-7.5px]  after:w-3 after:h-3 after:rounded-full after:bg-grayLight"></div>
            <span className="font-bold absolute bottom-[-9px] left-6">01.2022</span>
          </div>
          <div className="w-4/5">
            <div className="font-bold text-2xl inline-flex items-center">
              <span className="font-bold mr-2 text-customOrange">2event</span>
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

export default Experience;
