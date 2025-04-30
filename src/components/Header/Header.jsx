import React, { useState } from "react";
import { GetSvg } from "../GetSvg";
import styles from "./header.module.css";
import { useDarkMode } from "../../hooks/useDarkMode";
import myPhoto from "../../assets/images/myPhoto.png";
import useMobile from "../../hooks/useMobile";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useDarkMode("");
  const isMobile = useMobile();
  console.log("isMobile", isMobile);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navLinks = (
    <>
      <a
        href="#about"
        onClick={() => setIsMenuOpen(false)}
        className={`nav-link font-bold duration-200 text-center ${
          !isMobile
            ? " hover:dark:text-white hover:text-black transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left dark:after:bg-white after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black] after:transition-transform after:duration-300 hover:after:scale-x-99"
            : "shadow-btn dark:shadow-btnDark  w-1/3 rounded active:shadow-btnhover dark:active:shadow-btnDarkHover active:scale-98"
        }`}
      >
        About
      </a>
      <a
        href="#skills"
        onClick={() => setIsMenuOpen(false)}
        className={`nav-link font-bold duration-200 text-center ${
          !isMobile
            ? " hover:dark:text-white hover:text-black transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left dark:after:bg-white after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black] after:transition-transform after:duration-300 hover:after:scale-x-99"
            : "shadow-btn dark:shadow-btnDark  w-1/3 rounded active:shadow-btnhover dark:active:shadow-btnDarkHover active:scale-98"
        }`}
      >
        Skills
      </a>
      <a
        href="#projects"
        onClick={() => setIsMenuOpen(false)}
        className={`nav-link font-bold duration-200 text-center ${
          !isMobile
            ? " hover:dark:text-white hover:text-black transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left dark:after:bg-white after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black] after:transition-transform after:duration-300 hover:after:scale-x-99"
            : "shadow-btn dark:shadow-btnDark  w-1/3 rounded active:shadow-btnhover dark:active:shadow-btnDarkHover active:scale-98"
        }`}
      >
        Projects
      </a>
      <a
        href="#experience"
        onClick={() => setIsMenuOpen(false)}
        className={`nav-link font-bold duration-200 text-center ${
          !isMobile
            ? " hover:dark:text-white hover:text-black transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left dark:after:bg-white after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black] after:transition-transform after:duration-300 hover:after:scale-x-99"
            : "shadow-btn dark:shadow-btnDark  w-1/3 rounded active:shadow-btnhover dark:active:shadow-btnDarkHover active:scale-98"
        }`}
      >
        Experience
      </a>
      <a
        href="#contact"
        onClick={() => setIsMenuOpen(false)}
        className={`nav-link font-bold duration-200 text-center ${
          !isMobile
            ? " hover:dark:text-white hover:text-black transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left dark:after:bg-white after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black] after:transition-transform after:duration-300 hover:after:scale-x-99"
            : "shadow-btn dark:shadow-btnDark  w-1/3 rounded active:shadow-btnhover dark:active:shadow-btnDarkHover active:scale-98"
        }`}
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

      <nav className="hidden mobile:flex space-x-4">{navLinks}</nav>

      <button
        onClick={toggleMenu}
        className={`${
          styles.menuBtn
        }  hidden border-4 border-backgroundDark dark:border-backgroundLight dark:text-backgroundLight before:bg-backgroundDark dark:before:bg-backgroundLight after:bg-backgroundDark dark:after:bg-backgroundLight  max-mobile:block z-41 ${
          isMenuOpen ? styles.menuCloseBtn : ""
        }`}
      >
        {/* {isMenuOpen ? (
          <div>
            <GetSvg svg="close" />
          </div>
        ) : (
          <GetSvg svg="burger" />
        )} */}
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
      <div
        className={`scroll-y-0 mobile:hidden fixed top-0  left-0 w-full  bg-backgroundLight dark:bg-backgroundDark  transition-opacity duration-300  h-full ${
          isMenuOpen ? "z-40 opacity-100" : "z-[-10] opacity-0"
        }`}
      />

      {isMenuOpen && (
        <>
          <div
            className={`scroll-y-0 mobile:hidden fixed top-30 left-0   flex flex-col h-1/2  w-full justify-around  items-center ${
              isMenuOpen ? "z-40 opacity-100" : "z-[-10] opacity-0"
            }`}
          >
            {navLinks}
          </div>
        </>
      )}
    </header>
  );
};
