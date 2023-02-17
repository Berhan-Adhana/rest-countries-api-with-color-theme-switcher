import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from "../hooks/useDarkMode";
const Navbar = () => {
  const [theme, setTheme] = useDarkMode();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className="h-[56px] shadow w-full p-4 dark:bg-[var(--container-dark-color)] dark:text-white flex justify-between items-center">
      <h2 className="font-bold">Where in the world?</h2>
      <span className="flex items-center justify-center">
        <button onClick={toggleTheme}>
          {theme !== "light" ? <FiMoon /> : <FiSun />}
        </button>
        <p className="inline-block ml-3">
          {theme !== "light" ? "Dark Mode" : "Light Mode"}
        </p>
      </span>
    </nav>
  );
};

export default Navbar;
