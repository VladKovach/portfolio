// SideNav.jsx
import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const activeIndex = sections.findIndex((sec) => sec.id === active);
  const fillPercent = (activeIndex / (sections.length - 1)) * 100;

  return (
    <nav className="fixed top-1/2 left-4 transform -translate-y-1/2 h-1/2">
      <div className="relative h-full flex flex-col items-center">
        {/* Gray track */}
        <div className="absolute w-[2px] bg-grayDark top-0 bottom-0" />

        {/* Gradient fill */}
        <div
          className="absolute w-[2px] bg-gradient-to-b from-grayDark to-textLight top-0"
          style={{ height: `${fillPercent}%`, transition: "height 0.5s ease" }}
        />

        {/* Squares */}
        <ul className="relative z-10 flex flex-col items-center justify-between h-full">
          {sections.map((sec) => {
            const isActive = active === sec.id;
            return (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className={`
                    block w-5 h-5
                    ${isActive ? "bg-textLight rotate-135" : "bg-grayDark"}
                     border-grayDark
                    transition-all duration-1000
                  `}
                  title={sec.label}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
