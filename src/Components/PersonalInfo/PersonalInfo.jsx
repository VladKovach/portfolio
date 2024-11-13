import React from "react";
import classes from "./personalInfo.module.scss";
import myFoto from "../../assets/images/Vladuslav_CV_Foto.jpg";
import pdf from "./magistr_compressed_pdf.pdf";

const PersonalInfo = () => {
  return (
    <div className={classes.info_wrapper}>
      <div className={classes.my_info_container}>
        <div className={classes.info}>
          <p>
            I am Vladyslav Kovachuk, a highly motivated junior+ front-end developer with a strong
            passion for continuous learning and growth.
          </p>
          <p>
            <strong>Stack:</strong> HTML, CSS, JS, TypeScript, Sass, CSS-in-JS, Styled Components,
            JQuery, React, Redux, RTK, NextJS, Vue, NuxtJS, Git, GitHub.
          </p>
          <p>
            <strong>Education:</strong>
            <a href={pdf} className={classes.link} target="_blank" rel="noreferrer">
              Master of Science{" "}
              <svg
              
                xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                height="20px"
                viewBox="0 0 24 24"
                  fill="none"
              >
                <path
                  d="M10 15H12C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3H8C4.68629 3 2 5.68629 2 9C2 10.5367 2.57771 11.9385 3.52779 13M16 21C19.3137 21 22 18.3137 22 15C22 13.4633 21.4223 12.0615 20.4722 11M12 21C8.68629 21 6 18.3137 6 15C6 11.6863 8.68629 9 12 9H14"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </a>
            . Yzhorod National University. Specialization: Cybersecurity.
          </p>
          <p>
            <strong>Languages:</strong> Ukrainian: Native <br />
            English: B1 <br />
            German: B1 <br />
            Russian: B1
          </p>
        </div>
        <img src={myFoto} width={400} alt="My Foto" className={classes.my_foto} />
      </div>
    </div>
  );
};

export default PersonalInfo;
