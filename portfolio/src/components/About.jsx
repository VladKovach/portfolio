import SkillItem from "./ui/SkillItem";

const About = () => {
  return (
    <div className="mt-10 ml-10">
      <div className="">
        <h2 className="font-bold text-textLight text-xl">Stack:</h2>
        <div className="w-5/6 flex mt-2 flex-wrap shadow-card rounded p-3">
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
        </div>
      </div>
      <div className=" mt-5 ">
        <h2 className="font-bold text-xl">What i can:</h2>
        <div className="w-5/6  mt-2  shadow-card rounded p-3">
          <p className="">qwdqwd</p>
          <p>qwdqwd</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
