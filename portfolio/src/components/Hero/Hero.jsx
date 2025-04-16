import { GetSvg } from "../GetSvg";
import ScaleAnimatedElement from "../ui/ScaleAnimatedElement";
import styles from "./hero.module.css";

const cubes = [
  { id: "cube-1", svg: "html", svg2: "css" },
  { id: "cube-2", svg: "js", svg2: "ts" },
  { id: "cube-3", svg: "react", svg2: "nextjs" },
  { id: "cube-4", svg: "scss", svg2: "redux" },
  { id: "cube-5", svg: "git", svg2: "github" },
  { id: "cube-6", svg: "angular", svg2: "vue" },
  { id: "cube-7", svg: "npm", svg2: "es6" },
  { id: "cube-8", svg: "vite", svg2: "webpack" },
  { id: "cube-9", svg: "rest", svg2: "jest" },
];
const heroIdeas = ["Imagine", "Plan", "Desire", "Want", 'Think'];
const Hero = () => {
  return (
    <div className="h-1/2 w-full flex justify-around p-5 mt-15">
      <div className="flex flex-col  h-full w-2/5">
        <h1 className="text-2xl font-bold text-textLight ">
          <span className="text-customOrange text-3xl">Let’s</span> Build What You{" "}
          <div className={styles.slider}>
            <span className={styles.container}>
              {heroIdeas.map((word) => (
                <p key={word} className="flex items-center  pb-2">
                 
                  <span>{word}</span>
                  <span className="rounded-full  p-2">
                    <GetSvg svg={word} />
                  </span>
                </p>
              ))}
            </span>
            {/* Imagine&nbsp; <GetSvg svg="idea" /> */}
          </div>
        </h1>
        <p className="text-lg text-textLight mt-4 font-bold">
          <span className="text-customOrange text-xl"> Hi there!</span> It's nice to see you😊 I'm
          Vlad, a frontend developer with a strong desire to create impactful digital experiences.
        </p>
        <a
          href="#projects"
          className={`${styles.shadowBtn} mt-6 px-4 py-2 font-bold w-[140px] text-white  rounded shadow-btn hover:shadow-btnhover transition-all duration-300 `}
        >
          View Projects
        </a>
        {/* <ScaleAnimatedElement text={"View Projects"} /> */}
      </div>
      <div className={`grid grid-cols-3 gap-2 content-center ${styles.scene}`}>
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
