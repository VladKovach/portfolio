import { GetSvg } from "../../GetSvg";
import styles from "./skillLogo.module.css";

const SkillLogo = ({ name }) => {
  return (
    <div className="relative inline-block perspective-near">
      {/* Outer glowing border */}
      <div className="absolute inset-0 rounded-full border-2 border-white/20 blur-md z-0"></div>

      {/* 3D coin container */}
      <div className={`${styles.container} z-10`}>
        {/* Coin edge / depth layers */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={styles.sideLayer}
            style={{ transform: `translateZ(${i * 0.6}px)` }}
          />
        ))}

        {/* Coin face */}
        <div className="z-20">
          <GetSvg svg={name} width="40" height="40" />
        </div>
      </div>
    </div>
  );
};

export default SkillLogo;
