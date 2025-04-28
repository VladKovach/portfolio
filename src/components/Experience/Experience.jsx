import React from "react";
import { AnimatedBorder } from "../ui/AnimatedBorder/AnimatedBorder";
import posterPrint from "../../assets/images/posterPrint.png";
import { GetSvg } from "../GetSvg";
import styles from "./experience.module.css";
import SkillLogo from "../ui/SkillLogo/SkillLogo";

const Experience = () => {
  return (
    <div className="flex flex-col mt-10 z-21 ">
      <h2 className="font-bold text-3xl ">Experience</h2>
      <AnimatedBorder>
        <div className="p-2  w-full ">
          {/* <div className=" relative flex flex-col">
            <span className="font-bold absolute top-[-12px] left-6">01.2023</span>
            <div className="relative ml-[6px] border-l-[3px] h-50 border-grayLight  before:content-['']  before:absolute before:top-[-5px] before:left-[-7.5px]  before:w-[13px] before:h-[13px] before:rounded-full before:bg-grayLight 
             after:content-['']  after:absolute after:bottom-[-5px] after:left-[-7.5px]  after:w-[13px] after:h-[13px] after:rounded-full after:bg-grayLight"></div>
            <span className="font-bold absolute bottom-[-9px] left-6">01.2022</span>
          </div> */}
          {/* need animation  */}
          {/* <div className='shadow-md shadow-textLight w-1/2 font-bold text-xl text-textLight flex items-center'><p className="p-4">01.2022</p>-&nbsp<p>01.2023</p></div> */}

          <div className="">
            <div className="flex items-end max-sm:flex-col max-sm:items-center">
              <div className=" max-sm:w-full max-sm:flex max-sm:justify-between">
                <a
                  className="font-bold text-2xl inline-flex items-center"
                  href="https://2event.com/en/"
                  target="_blank"
                >
                  <span className="font-bold mr-2 text-darkOrange dark:text-lightOrange">
                    2event
                  </span>
                  <GetSvg svg="external" />
                </a>
                <p className="shadow-inset font-bold mt-3 rounded-2xl p-3 ml-2">
                  Frontend Developer
                </p>
              </div>
              <div className="w-3/5 max-sm:w-full max-sm:mt-5 ml-10 max-sm:ml-0 mb-1 pb-2 flex justify-between border-b-[3px]">
                <p className="shadow-card rounded-projectImg  p-5 pt-2 pb-2">03.2024</p>
                <p className="shadow-card rounded-projectImg  p-5 pt-2 pb-2">08.2024</p>
              </div>
            </div>
            <p className="mt-7">
              Development of the admin page and enhancement of functionality for creating events.
            </p>
            <div className="mt-5 w-full p-1 max-mobile:text-center">
              <SkillLogo name="Vue.js" index={0} />
              <SkillLogo name="Css" index={1} />
              <SkillLogo name="Js" index={2} />
              <SkillLogo name="Postman" index={3} />
              <SkillLogo name="Vite" index={4} />
              <SkillLogo name="Docker" index={5} />
              <SkillLogo name="Jira" index={6} />
              <SkillLogo name="Figma" index={7} />
              <SkillLogo name="GitLab" index={8} />
            </div>
          </div>
        </div>
      </AnimatedBorder>
      <AnimatedBorder>
        <div className="p-2  w-full ">
          <div className="">
            <div className="flex items-end max-sm:flex-col max-sm:items-center">
              <div className=" max-sm:w-full max-sm:flex max-sm:justify-between">
                <a
                  className="font-bold text-2xl inline-flex items-center"
                  href="https://posterprint.com.ua"
                  target="_blank"
                >
                  <span className="font-bold mr-2 text-darkOrange dark:text-lightOrange">
                    PosterPrint
                  </span>
                  <GetSvg svg="external" />
                </a>
                <p className="shadow-inset font-bold mt-3 rounded-2xl p-3 ml-2">
                  Frontend Developer
                </p>
              </div>
              <div className="w-3/5 max-sm:w-full max-sm:mt-5 ml-10 max-sm:ml-0 mb-1 pb-2 flex justify-between border-b-[3px]">
                <p className="shadow-card rounded-projectImg  p-5 pt-2 pb-2">04/2023</p>
                <p className="shadow-card rounded-projectImg  p-5 pt-2 pb-2">02/2024</p>
              </div>
            </div>
            <p className="mt-7">Development of an online shop.</p>
            <div className="mt-5 w-full p-1 max-mobile:text-center">
              <SkillLogo name="Next.js" index={1} darkSvg={true} />
              <SkillLogo name="Css" index={2} />
              <SkillLogo name="Js" index={3} />
              <SkillLogo name="Webpack" index={5} />
              <SkillLogo name="Jira" index={6} />
              <SkillLogo name="Postman" index={7} />
              <SkillLogo name="Figma" index={8} />
              <SkillLogo name="GitHub" index={9} />
            </div>
          </div>
        </div>
      </AnimatedBorder>
      <AnimatedBorder>
        <div className="p-2  w-full ">
          {/* <div className=" relative flex flex-col">
            <span className="font-bold absolute top-[-12px] left-6">01.2023</span>
            <div className="relative ml-[6px] border-l-[3px] h-50 border-grayLight  before:content-['']  before:absolute before:top-[-5px] before:left-[-7.5px]  before:w-[13px] before:h-[13px] before:rounded-full before:bg-grayLight 
             after:content-['']  after:absolute after:bottom-[-5px] after:left-[-7.5px]  after:w-[13px] after:h-[13px] after:rounded-full after:bg-grayLight"></div>
            <span className="font-bold absolute bottom-[-9px] left-6">01.2022</span>
          </div> */}
          {/* need animation  */}
          {/* <div className='shadow-md shadow-textLight w-1/2 font-bold text-xl text-textLight flex items-center'><p className="p-4">01.2022</p>-&nbsp<p>01.2023</p></div> */}

          <div className="">
            <div className="flex items-end max-sm:flex-col max-sm:items-center">
              <div className=" max-sm:w-full max-sm:flex max-sm:justify-between">
                <div className="font-bold text-2xl inline-flex items-center">
                  <span className="font-bold mr-2 text-darkOrange dark:text-lightOrange">
                    Freelance
                  </span>
                </div>
                <p className="shadow-inset font-bold mt-3 rounded-2xl p-3">Frontend Developer</p>
              </div>
              <div className="w-3/5 max-sm:w-full max-sm:mt-5 ml-10 max-sm:ml-0 mb-1 pb-2 flex justify-between border-b-[3px]">
                <p className="shadow-card rounded-projectImg  p-5 pt-2 pb-2">05.2022</p>
                <p className="shadow-card rounded-projectImg  p-5 pt-2 pb-2">07.2023</p>
              </div>
            </div>
            <p className="mt-7">
              Creating layouts, working with APIs, fixing bugs, and implementing various features
              and functionality across different projects.
            </p>
            <div className="mt-5 w-full p-1 max-mobile:text-center">
              <SkillLogo name="Html" index={0} />
              <SkillLogo name="Css" index={1} />
              <SkillLogo name="Js" index={2} />
              <SkillLogo name="Scss" index={3} />
              <SkillLogo name="JQuery" index={4} />
              <SkillLogo name="Figma" index={5} />
              <SkillLogo name="Git" index={6} />
            </div>
          </div>
        </div>
      </AnimatedBorder> 
      <article className="mt-10 p-6 dark:bg-backgroundLight bg-backgroundDark  dark:shadow-quoteDark shadow-quote text-center  max-w-2xl mx-auto">
        <blockquote className="text-lg italic dark:text-backgroundDark text-textLight">
          "This portfolio does not represent the full extent of my knowledge, as some projects are
          still in progress, and others will remain unpublished. I am continuously learning new
          skills, and for the past six months, I have been intensely improving my English and German
          to achieve excellence in both spoken and written communication. This portfolio is
          constantly growing with projects that showcase both my current expertise and newly
          acquired knowledge."
        </blockquote>
      </article>
    </div>
  );
};

export default Experience;
