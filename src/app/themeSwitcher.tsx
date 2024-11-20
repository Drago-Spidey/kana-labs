"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures theme switcher works on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => setTheme("light")}
        className={`py-2 px-4 rounded ${theme === "light" ? "bg-gray-300" : ""}`}
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`py-2 px-4 rounded ${theme === "dark" ? "bg-gray-700 text-white" : ""}`}
      >
        Dark
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`py-2 px-4 rounded ${theme === "system" ? "bg-blue-500 text-white" : ""}`}
      >
        System
      </button>
    </div>
  );
};

export default ThemeSwitcher;
