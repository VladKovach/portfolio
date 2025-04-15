import { GetSvg } from "../GetSvg";
import styles from "./hero.module.css";

const cubes = [
  { id: "cube-1", svg: "html", svg2: "css" },
  { id: "cube-2", svg: "js", svg2: "ts" },
  { id: "cube-3", svg: "react", svg2: "nextjs" },
  { id: "cube-4", svg: "redux", svg2: "mobx" },
  { id: "cube-5", svg: "git", svg2: "github" },
  { id: "cube-6", svg: "angular", svg2: "vue" },
  { id: "cube-7", svg: "npm", svg2: "es6" },
  { id: "cube-8", svg: "vite", svg2: "webpack" },
  { id: "cube-9", svg: "rest", svg2: "jest" },
];
const Hero = () => {
  return (
    <div className="h-1/2 w-full flex justify-around p-5 mt-15">
      <div className="flex flex-col  h-full w-2/5">
        <h2 className="text-xl font-bold text-white">Hi! My name is Vlad Kovachuk</h2>
        <p className="text-lg text-gray-400 mt-4">I am a frontend developer.</p>
        <a
          href="#projects"
          className="mt-6 px-4 py-2 w-[140px] text-white  shadow-btn  rounded hover:shadow-btnhover  transition duration-300"
        >
          View Projects
        </a>
      </div>
      <div className={`grid grid-cols-3 gap-0.5 content-center ${styles.scene}`}>
        {cubes.map((cube) => (
          <div key={cube.id} className={styles.cube}>
            <div
              className={`${styles.face} ${styles.face_front} inline-flex items-center justify-center`}
            >
              {/* <img width={40} height={40} className="rounded " src={cube.svg} /> */}
              <GetSvg svg={cube.svg} />
            </div>
            <div className={`${styles.face} ${styles.face_back}`}></div>
            <div
              className={`${styles.face} ${styles.face_right} inline-flex items-center justify-center`}
            >
              <GetSvg svg={cube.svg2} />
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
