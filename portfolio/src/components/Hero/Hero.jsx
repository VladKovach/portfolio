import { GetSvg } from "../GetSvg";
import styles from "./hero.module.css";
import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";
import js from "../../assets/svg/js.svg";
import react from "../../assets/svg/react.svg";
import next from "../../assets/svg/next.svg";
import vue from "../../assets/svg/vue.svg";
import angular from "../../assets/svg/angular.svg";
import vite from "../../assets/svg/vite.svg";
import git from "../../assets/svg/git.svg";
const cubes = [
  { id: "cube-1", svg: "html" },
  { id: "cube-2", svg: "css" },
  { id: "cube-3", svg: "js" },
  { id: "cube-4", svg: "react" },
  { id: "cube-5", svg: "next" },
  { id: "cube-6", svg: "vue" },
  { id: "cube-7", svg: "angular" },
  { id: "cube-8", svg: "vite" },
  { id: "cube-9", svg: "git" },
];
const Hero = () => {
  return (
    <div className="h-1/2 w-full flex justify-around p-5 mt-15">
      <div className="flex flex-col  h-full w-2/5">
        <h2 className="text-xl font-bold text-white">Hi! My name is Vlad Kovachuk</h2>
        <p className="text-lg text-gray-400 mt-4">I am a frontend developer.</p>
        <a
          href="#projects"
          className="mt-6 px-4 py-2 w-[140px] bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          View Projects
        </a>
      </div>
      <div className={`grid grid-cols-3 gap-0.5 content-center ${styles.scene}`}>
        {cubes.map((cube) => (
          <div key={cube.id} className={styles.cube}>
            <div className={`${styles.face} ${styles.face_front}`}>
              <img src={cube.svg} />
            </div>
            <div className={`${styles.face} ${styles.face_back}`}></div>
            <div className={`${styles.face} ${styles.face_right}`}>
            <img src={cube.svg2} />
            </div>
            <div className={`${styles.face} ${styles.face_left}`}></div>
            <div className={`${styles.face} ${styles.face_top}`}></div>
            <div className={`${styles.face} ${styles.face_bottom}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
