import React from "react";
import classes from "./personalInfo.module.scss";
import myFoto from "../../assets/images/Vladyslav_CV_Foto.jpg";
import pdf from "./magistr_compressed_pdf.pdf";
import bewertung from "./bewertung_magistr.pdf";
import b2zertifikat from "./b2zertifikat.pdf";
const PersonalInfo = () => {
  return (
    <div className={classes.info_wrapper}>
      <div className={classes.my_info_container}>
        <div className={classes.info}>
          <p>
            My name is Vladyslav Kovachuk, and I am a Front-end Developer from Ukraine currently
            living in Germany.
          </p>
          <p>
            <strong>Work Experience:</strong>
          </p>
          <ul>
            <li>
              <strong>
                Front-end Developer (04/2023 - 02/2024) at the Ukrainian company{" "}
                <a
                  href="https://posterprint.ua"
                  className={classes.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  PosterPrint
                </a>
              </strong>
              <ul>
                <li>Developed and maintained responsive web pages using React.js and Sass.</li>
                <li>
                  Collaborated with the design team to implement modern, user-friendly UI/UX
                  designs.
                </li>
                <li>
                  Optimized website performance using Lighthouse, resulting in faster load times and
                  an improved user experience.
                </li>
                <li>
                  Integrated third-party APIs such as{" "}
                  <a
                    href="https://www.liqpay.ua/doc"
                    className={classes.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Card Payment
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://developers.novaposhta.ua/documentation"
                    className={classes.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Delivery
                  </a>
                  .
                </li>
                <li>Worked closely with backend developers to ensure seamless data integration.</li>
              </ul>
            </li>
            <li>
              <strong>
                Front-end Developer (03/2024 - 08/2024) at the Ukrainian-American company{" "}
                <a
                  href="https://2event.com"
                  className={classes.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  2EVENT
                </a>
              </strong>
              <ul>
                <li>
                  Key Responsibility: Collaborated with the team to implement new designs and
                  functionality for creating events.
                </li>

                <li>Built dynamic, reusable components with Vue.js.</li>
                <li>
                  Worked with different component frameworks and libraries such as{" "}
                  <a
                    href="https://vuetifyjs.com/en/"
                    className={classes.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vuetify
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://element-plus.org/"
                    className={classes.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Element+
                  </a>
                  . Implemented and heavily customized{" "}
                  <a
                    href="https://vcalendar.io/"
                    className={classes.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VCalendar
                  </a>
                  .
                </li>
                <li>Collaborated with teams across different time zones.</li>
              </ul>
            </li>
          </ul>

          <p>
            <strong>Stack:</strong> HTML, CSS, JS, TypeScript, Sass, CSS-in-JS, Styled Components,
            JQuery, GraphQL, React, Redux, RTK, NextJS, Angular, Vue, CI/CD, PWAs, Website
            Performance Auditing & Optimization (DevTools, Lighthouse), Jest, Vitest,  Git, GitHub, REST,
            JIRA, UI & UX, Docker(basic).
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
          <a href={bewertung} className={classes.link} target="_blank" rel="noreferrer">
            Evaluation in Germany{" "}
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
          <ul>
            <strong>Languages:</strong>
            <li>Ukrainian: Native</li>
            <li>English: B2-C1</li>
            <li>
              German:{" "}
              <a href={b2zertifikat} 
              className={classes.link} 
              target="_blank" 
              rel="noreferrer">
                B2
              </a>
              -C1
            </li>
            <li>Russian: C1</li>
          </ul>
        </div>
        <img src={myFoto} width={400} alt="My Foto" className={classes.my_foto} />
      </div>
    </div>
  );
};

export default PersonalInfo;
