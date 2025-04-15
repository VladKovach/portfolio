import React from "react";
import styles from "./scaleAnimatedElement.module.css";
const ScaleAnimatedElement = ({ text }) => {
  return <div className={`${styles.container} shadow-btn text-center text-textLight font-bold`}>{text}</div>;
};
export default ScaleAnimatedElement;
 