import React from "react";

const SkillItem = ({ name }) => {
  return (
    <div className=" rounded-xl bg-customBlue pt-1.5 pb-2 pr-2 pl-2 m-1 inline-flex items-center justify-baseline">
      <span className="text-customBlue rounded-full h-2 w-2  bg-textLight mr-2"  /> <div className="text-textLight" >{name}</div>
    </div>
  );
};

export default SkillItem;
