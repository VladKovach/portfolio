import React from "react";
import { GetSvg } from "../GetSvg";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <header className={`${styles.header} text-white p-4 w-full flex justify-between items-center`}>
      <button className="">
        <GetSvg svg="brain" />
      </button>
      <div className="flex">
        <a
          href="#about"
          className="relative mx-2 pb-1 font-bold text-textLight hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:origin-left after:bg-wtext-white after:shadow-[0_0_8px_orange] after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          About 
        </a>
        <a
          href="#projects"
          className="relative mx-2 pb-1 text-textLight font-bold hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:origin-left after:bg-wtext-white after:shadow-[0_0_8px_orange] after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          
          Skills
        </a>
        <a
          href="#projects"
          className="relative mx-2 pb-1 text-textLight font-bold hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:origin-left after:bg-wtext-white after:shadow-[0_0_8px_orange] after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          
          Experience
        </a>
        <a
          href="#projects"
          className="relative mx-2 pb-1 text-textLight font-bold hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:origin-left after:bg-wtext-white after:shadow-[0_0_8px_orange] after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          
          Projects
        </a>
        <a
          href="#contact"
          className="relative mx-2 pb-1 text-textLight font-bold hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:origin-left after:bg-wtext-white after:shadow-[0_0_8px_orange] after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Contact
        </a>
      </div>

      <div className="w-[60px] h-[25px] inline-flex">
        <input type="checkbox" id="darkmode" className={styles.darkmode_container} />
        <label className={styles.cusomLabel} htmlFor="darkmode">
          <GetSvg svg="sun" />
          <GetSvg svg="moon" />
        </label>
      </div>
      {/* </div> */}
    </header>
  );
};
