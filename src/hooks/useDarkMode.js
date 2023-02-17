import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return [theme, setTheme];
};

export default useDarkMode;
