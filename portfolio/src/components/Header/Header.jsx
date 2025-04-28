import React, { useState } from "react";
import { GetSvg } from "../GetSvg";
import styles from "./header.module.css";
import { useDarkMode } from "../../hooks/useDarkMode";
import myPhoto from "../../assets/images/myPhoto.png";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useDarkMode("");
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navLinks = (
    <>
      <a
        href="#about"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link font-bold  hover:dark:text-white
         hover:text-black transition-colors duration-300 
         after:absolute after:bottom-0 after:left-0 after:h-[2px] 
         after:w-full after:scale-x-0 after:origin-left dark:after:bg-white
          after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black]
           after:transition-transform after:duration-300 hover:after:scale-x-99"
      >
        About
      </a>
      <a
        href="#skills"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link font-bold  hover:dark:text-white
         hover:text-black transition-colors duration-300 
         after:absolute after:bottom-0 after:left-0 after:h-[2px] 
         after:w-full after:scale-x-0 after:origin-left dark:after:bg-white
          after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black]
           after:transition-transform after:duration-300 hover:after:scale-x-99"
      >
        Skills
      </a>
      <a
        href="#projects"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link font-bold  hover:dark:text-white
         hover:text-black transition-colors duration-300 
         after:absolute after:bottom-0 after:left-0 after:h-[2px] 
         after:w-full after:scale-x-0 after:origin-left dark:after:bg-white
          after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black]
           after:transition-transform after:duration-300 hover:after:scale-x-99"
      >
        Projects
      </a>
      <a
        href="#experience"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link font-bold  hover:dark:text-white
         hover:text-black transition-colors duration-300 
         after:absolute after:bottom-0 after:left-0 after:h-[2px] 
         after:w-full after:scale-x-0 after:origin-left dark:after:bg-white
          after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black]
           after:transition-transform after:duration-300 hover:after:scale-x-99"
      >
        Experience
      </a>
      <a
        href="#contact"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link font-bold  hover:dark:text-white
        hover:text-black transition-colors duration-300 
        after:absolute after:bottom-0 after:left-0 after:h-[2px] 
        after:w-full after:scale-x-0 after:origin-left dark:after:bg-white
         after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black]
          after:transition-transform after:duration-300 hover:after:scale-x-99"
      >
        Contact
      </a>
    </>
  );
  return (
    <header
      className={`${styles.header}  p-4 w-full bg-backgroundLight dark:bg-backgroundDark  transition-colors duration-100 flex justify-between items-center`}
      style={{
        animationName: theme === "dark" ? "scrollheaderDark" : "scrollheader",
        animationFillMode: "both",
        animationTimeline: "scroll()",
        animationRange: "50px 140px",
      }}
    >
      <span className="">
        <img src={myPhoto} width="50px" height="50px" alt="my photo" />
      </span>

      <nav className="hidden sm:flex space-x-4">{navLinks}</nav>

      <button
        onClick={toggleMenu}
        className={`hidden max-sm:block ${isMenuOpen ? "fixed top-0 left-0 z-41" : ""}`}
      >
        {isMenuOpen ? (
          <div>
            <GetSvg svg="close" />
          </div>
        ) : (
          <GetSvg svg="burger" />
        )}
      </button>

      <div className="w-[60px] h-[25px] inline-flex">
        <input
          type="checkbox"
          id="darkmode"
          className={styles.darkmode_container}
          value={theme}
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <label className={styles.cusomLabel} htmlFor="darkmode">
          <GetSvg svg="sun" />
          <GetSvg svg="moon" />
        </label>
      </div>
      {/* for menuMobile is animation neeeded */}
      {isMenuOpen && (
        <div
          className={`${styles.menuMobile} scroll-y-0 sm:hidden fixed top-0  left-0 w-full  bg-grayLight   h-full flex items-center justify-center   z-40`}
        >
          <div className="flex flex-col font-bold space-y-7 py-4 sm:hidden text-2xl translate-y-[-30%]">
            {navLinks}
          </div>
        </div>
      )}
    </header>
  );
};
