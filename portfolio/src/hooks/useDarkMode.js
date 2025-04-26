import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const localTheme = localStorage.getItem("theme");
  console.log("localTheme = ", localTheme);

  const [theme, setTheme] = useState(
    localTheme
      ? localTheme
      : !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
  console.log("theme = ", theme);

  console.log("localTheme = ", localTheme);
  console.log('!("theme" in localStorage) = ', !("theme" in localStorage));
  console.log(
    'window.matchMedia("(prefers-color-scheme: dark)").matches = ',
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

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
