import React, { useState } from "react";
import { GetSvg } from "../GetSvg";
import styles from "./header.module.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = (
    <>
      <a
        href="#about"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link  hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:origin-left after:bg-wtext-white after:shadow-[0_0_8px_orange] after:transition-transform after:duration-300 hover:after:scale-x-100"
      >
        About
      </a>
      <a
        href="#skills"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link  hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:origin-left after:bg-wtext-white after:shadow-[0_0_8px_orange] after:transition-transform after:duration-300 hover:after:scale-x-100"
      >
        Skills
      </a>
      <a
        href="#projects"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link  hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:origin-left after:bg-wtext-white after:shadow-[0_0_8px_orange] after:transition-transform after:duration-300 hover:after:scale-x-100"
      >
        Projects
      </a>
      <a
        href="#experience"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link  hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:origin-left after:bg-wtext-white after:shadow-[0_0_8px_orange] after:transition-transform after:duration-300 hover:after:scale-x-100"
      >
        Experience
      </a>
      <a
        href="#contact"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link  hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:origin-left after:bg-wtext-white after:shadow-[0_0_8px_orange] after:transition-transform after:duration-300 hover:after:scale-x-100"
      >
        Contact
      </a>
    </>
  );
  return (
    <header className={`${styles.header} text-white p-4 w-full flex justify-between items-center`}>
      <button className="">
        <GetSvg svg="brain" />
      </button>

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
        <input type="checkbox" id="darkmode" className={styles.darkmode_container} />
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
