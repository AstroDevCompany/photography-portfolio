"use client";

import { useEffect, useState } from "react";
import img_moon from "../../public/theme/moon.png";
import img_sun from "../../public/theme/sun.png";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // On mount, check localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded border-2 border-gray-400 dark:border-gray-600 cursor-crosshair"
    >
      {isDark ? <img src={img_sun.src} className="w-4 h-4"></img> : <img src={img_moon.src} className="w-4 h-4"></img>}
    </button>
  );
}
