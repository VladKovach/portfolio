import { GetSvg } from "../GetSvg";
import styles from "./hero.module.css";

const cubes = [
  { id: "cube-1", svg: "Html", svg2: "Css" },
  { id: "cube-2", svg: "Js", svg2: "Ts" },
  { id: "cube-3", svg: "React", svg2: "Next.js" },
  { id: "cube-4", svg: "Scss", svg2: "Redux" },
  { id: "cube-5", svg: "Git", svg2: "GitHub" },
  { id: "cube-6", svg: "Angular", svg2: "Vue.js" },
  { id: "cube-7", svg: "Npm", svg2: "es6" },
  { id: "cube-8", svg: "Vite", svg2: "Webpack" },
  { id: "cube-9", svg: "Rest", svg2: "Jest" },
];
const heroIdeas = ["Imagine", "Plan", "Desire", "Think"];
const Hero = () => {
  return (
    <div className=" w-full flex justify-around max-sm:flex-col max-sm:items-center p-5 mt-15 max-sm:mt-0">
      <div className="flex flex-col  h-full w-2/5 max-sm:w-full mr-15 max-sm:mr-0">
        <h1 className="text-2xl font-bold  ">
          <span className="dark:text-lightOrange text-darkOrange text-3xl">Let’s</span> Build What
          You{" "}
          <div className={styles.slider}>
            <div className={styles.container}>
              {heroIdeas.map((word) => (
                <p key={word} className="flex items-center min-w-[135px] pb-2">
                  <span className="">{word}</span>
                  <span className="rounded-full  p-2">
                    <GetSvg svg={word} />
                  </span>
                </p>
              ))}
            </div>
            {/* Imagine&nbsp; <GetSvg svg="idea" /> */}
          </div>
        </h1>
        <p className="text-lg mt-4 font-bold">
          <span className="text-darkOrange dark:text-lightOrange text-xl"> Hi there!</span> It's
          nice to see you😊 I'm Vlad, a frontend developer with a strong desire to create impactful
          digital experiences.
        </p>
        <a
          href="#projects"
          className="mt-6 px-4 py-2 font-bold w-[140px]  rounded shadow-btn hover:shadow-btnhover  active:shadow-btnhover active:scale-98 duration-50 "
        >
          View Projects
        </a>
      </div>
      <div
        className={`grid grid-cols-3 gap-2 max-sm:w-[200px] max-sm:mt-8  content-center ${styles.scene}`}
      >
        {cubes.map((cube) => (
          <div key={cube.id} className={styles.cube}>
            <div
              className={`${styles.face} ${styles.face_front} dark:bg-white bg-grayDark  inline-flex items-center justify-center`}
            >
              <GetSvg svg={cube.svg} />
            </div>
            <div className={`${styles.face} ${styles.face_back} dark:bg-white bg-grayDark `}></div>
            <div
              className={`${styles.face} ${styles.face_right} inline-flex items-center justify-center dark:bg-white bg-grayDark `}
            >
              <GetSvg svg={cube.svg2} />
            </div>
            <div className={`${styles.face} ${styles.face_left} dark:bg-white bg-grayDark `}></div>
            <div className={`${styles.face} ${styles.face_top} dark:bg-white bg-grayDark `}></div>
            <div
              className={`${styles.face} ${styles.face_bottom} dark:bg-white bg-grayDark `}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
