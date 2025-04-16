import { useRef, useState } from "react";
import styles from "./animatedBorder.module.css";
export const AnimatedBorder = ({ classNames }) => {
  const containerRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCoords({ x, y });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove} 
      className={`${styles.animatedBorder} w-5/6 flex mt-2 flex-wrap shadow-card rounded p-3 ${classNames}`}
      style={{ "--x": `${coords.x}px`, "--y": `${coords.y}px` }}
    >
    </div>
  );
};
