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
    <header className="h-[56px] shadow w-full p-4 z-[999] fixed inset-0 bg-white dark:bg-containerColor text-textColor  dark:text-white flex justify-between items-center">
      <h1>Where in the world?</h1>
      <button
        onClick={toggleTheme}
        className="flex justify-center items-center "
      >
        {theme !== "light" ? <FiMoon /> : <FiSun />}{" "}
        <span className="inline ml-3 w-full h-full">
          {theme !== "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </button>
    </header>
  );
};

export default Navbar;
