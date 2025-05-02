import { useEffect, useState, useRef } from "react";

const sections = ["about", "skills", "projects", "experience", "contact"];

export function useSectionObserver() {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [isFirstTimeVisible, setIsFirstTimeVisible] = useState({});
  const seenRef = useRef({}); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
console.log('id = ', id);

          if (entry.isIntersecting) {
            setActiveSection(id);

            if (!seenRef.current[id]) {
              seenRef.current[id] = true;
              setIsFirstTimeVisible((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { rootMargin: "-50% 0px -20% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return { activeSection, isFirstTimeVisible };
}
