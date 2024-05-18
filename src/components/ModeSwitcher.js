import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function ModeSwitcher() {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  // Use useEffect to apply the dark mode class to the body
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    // Save the user's preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <span onClick={toggleDarkMode} className="cursor-pointer">
      {darkMode ? (
        <MoonIcon className="h-6 w-6 text-gray-900 dark:text-white" />
      ) : (
        <SunIcon className="h-6 w-6 text-gray-900 dark:text-white" />
      )}
    </span>
  );
}

export default ModeSwitcher;