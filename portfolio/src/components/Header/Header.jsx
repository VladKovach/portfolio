import React, { useState } from "react";
import { GetSvg } from "../GetSvg";
import styles from "./header.module.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = (
    <>
      <a href="#about" className="nav-link">
        About
      </a>
      <a href="#projects" className="nav-link">
        Skills
      </a>
      <a href="#projects" className="nav-link">
        Experience
      </a>
      <a href="#projects" className="nav-link">
        Projects
      </a>
      <a href="#contact" className="nav-link">
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

      <button onClick={toggleMenu} className="absolute top-0 left-50 z-90">
        <GetSvg svg="burger" />
      </button>

      <div className="w-[60px] h-[25px] inline-flex">
        <input type="checkbox" id="darkmode" className={styles.darkmode_container} />
        <label className={styles.cusomLabel} htmlFor="darkmode">
          <GetSvg svg="sun" />
          <GetSvg svg="moon" />
        </label>
      </div>

      {isMenuOpen && (
        <div
          className={`${styles.menuMobile} fixed top-0  left-0 w-full  bg-customBlue text-textLight  h-full flex items-center justify-center   z-40`}
        >
          <div className="flex flex-col font-bold space-y-7 py-4 sm:hidden text-2xl translate-y-[-30%]">
            {navLinks}
          </div>
        </div>
      )}
    </header>
  );
};
