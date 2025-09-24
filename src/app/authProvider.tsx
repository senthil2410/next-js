"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<{
  theme: string;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});


export const ThemeProvider = ({ children }: { children: React.ReactNode }) =>
 {

  const [theme, setTheme] = useState<string>("light");

 useEffect(() => 
  {
    const storedTheme = localStorage.getItem('theme') 

    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

 const toggleTheme = () =>
 {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }


  return (
    <ThemeContext.Provider value={{ toggleTheme, theme,}}>
      {children}
    </ThemeContext.Provider>
  );
};
