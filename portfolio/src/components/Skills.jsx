import { AnimatedBorder } from "./ui/AnimatedBorder/AnimatedBorder";
import SkillItem from "./ui/SkillItem";
const Skills = () => {
  return (
    <div  className="mt-10 scroll-mt-20">
      <div className="">
        <h2 className="font-bold text-textLight text-xl">Stack:</h2>
        {/* <div className="w-5/6 flex mt-2 flex-wrap shadow-card rounded p-3"> */}
        <AnimatedBorder index={0}>
          <SkillItem name="HTML" />
          <SkillItem name="Css" />
          <SkillItem name="JS" />
          <SkillItem name="TS" />
          <SkillItem name="Scss" />
          <SkillItem name="Tailwind" />
          <SkillItem name="React" />
          <SkillItem name="Redux" />
          <SkillItem name="NextJs" />
          <SkillItem name="Angular" />
          <SkillItem name="Vue" />
          <SkillItem name="Vite" />
          <SkillItem name="Webpack" />
          <SkillItem name="CI/CD" />
          <SkillItem name="Website Perfomance" />
          <SkillItem name="Jest" />
          <SkillItem name="Vitest" />
          <SkillItem name="Git" />
          <SkillItem name="GitHub" />
          <SkillItem name="REST" />
          <SkillItem name="JIRA" />
          <SkillItem name="UI & UX" />
          <SkillItem name="Docker" />
          <SkillItem name="Figma" />
          <SkillItem name="Postman" />
          {/* </div> */}
        </AnimatedBorder>
      </div>
      <div className=" mt-5 ">
        <h2 className="font-bold text-xl">What I can:</h2>
        <AnimatedBorder classNames="flex flex-col" index={1}>
          <SkillItem name="Write clean, scalable code" />
          <SkillItem name="Implement diverse functionalities" />
          <SkillItem name="Create smooth, optimized responsive layouts" />
          <SkillItem name="Optimize site speed in line with Core Web Vitals" />
          <SkillItem name="Integrate various APIs and turn design-ready concepts into reality" />
          <SkillItem name="Develaop elegant dark modes—from simple toggles to fully animated, custom themes" />
          <SkillItem name="Work seamlessly with React, Vue, Angular, or framework-less solutions" />
          <SkillItem name="Collaborate effectively within a team or thrive independently on the frontend" />
          <SkillItem name="Channel passion into every project—crafting innovative, user-centric experiences" />
          <SkillItem name="Continuously learn and innovate to keep up with the evolving web" />
        </AnimatedBorder>
      </div>
      <div className=" mt-5 ">
        <h2 className="font-bold text-xl">Languages:</h2>
        <AnimatedBorder index={2} classNames="flex flex-col">
          <SkillItem name="English: B2" />
          <SkillItem name="German: B2" />
          <SkillItem name="Ukrainian: native" />
          <SkillItem name="Russian: C1" />
        </AnimatedBorder>
      </div>
    </div>
  );
};

export default Skills;
