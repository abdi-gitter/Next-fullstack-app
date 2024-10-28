"use client";

import { createContext, useState } from "react";

// Create a context to hold the theme data (light or dark)
export const ThemeContext = createContext();

// ThemeProvider component that holds the logic for switching between themes
export const ThemeProvider = ({ children }) => {
  // Use React's useState to keep track of the current theme (starts with "dark")
  const [mode, setMode] = useState("dark");

    
  // Function to toggle between "dark" and "light" themes
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    // value={{ toggle, mode }} defines what data you want to share.
    <ThemeContext.Provider value={{ toggle, mode }}> 
    {/* The div will have a class of either "theme dark" or "theme light" 
      Components wrapped inside ThemeContext.Provider (like ThemeToggleButton) 
      can consume this data using useContext.*/} 
      <div className={`theme ${mode}`}>
          {children}
      </div>
    </ThemeContext.Provider>
  );
};
