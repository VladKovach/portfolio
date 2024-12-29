import React from "react";
import aimgameImg from "..//..//..//assets/images/aimgameImg.png";
import classes from "./Aimgame.module.scss";
export const Aimgame = () => {
  return (
    <div className={classes.container}>
      <div className="project_title_container">
        <span className="line" />
        <p>Aimgame</p>
        <span className="line" />
      </div>
      <p className={classes.text}>Click on the black square to open the game page!</p>

      <a href="https://vladkovach.github.io/aimgame/" target="_blank" rel="noopener noreferrer">
        <img src={aimgameImg} alt="site page" />
      </a>
    </div>
  );
};
