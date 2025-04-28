import React from "react";

const SkillItem = ({ name }) => {
  return (
    <div className=" rounded-xl bg-textLight dark:bg-grayDark  pt-1.5 pb-2 pr-2 pl-2 m-1 inline-flex items-center justify-baseline">
      <span className=" rounded-full min-h-2 min-w-2 bg-grayDark dark:bg-textLight mr-2" />
      <div className="text-backgroundDark dark:text-textLight">{name}</div>
    </div>
  );
};

export default SkillItem;
