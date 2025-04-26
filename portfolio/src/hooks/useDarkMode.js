import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const localTheme = localStorage.getItem("theme");

  const [theme, setTheme] = useState(
    localTheme
      ? localTheme
      : !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
console.log('theme = ', theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return [theme, setTheme];
};
