import React, { useState, useEffect } from 'react'
import Buttons from './pages/Buttons';
import { Button } from '../dist/index';
function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className='w-full min-h-screen flex flex-col gap-10 justify-center items-center transition-colors dark:bg-zinc-950'>
        <Buttons />
      </div>
      <Button
        onClick={handleChangeTheme}
        className='absolute right-10 bottom-10'
      >
        Change Theme
      </Button>
    </>
  )
}

export default App
