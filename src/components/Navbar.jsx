import React, { useState, useEffect } from 'react';
import { PiNotepadFill } from 'react-icons/pi';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const [theme, setTheme] = useState('light');

  const setThemeInStorage = (theme) => {
    localStorage.setItem('theme', theme)
  }

  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.remove('dark');
    document.body.style.backgroundColor = '#f1f5f9';
  }else {
    document.body.classList.add('dark');
    document.body.style.backgroundColor = '#1a1b1e';
  }

  return (
    <div className="border-b-2 p-2 border-[#1a1b1e] text-slate-800 dark:text-white dark:border-white dark:bg-[#1a1b1e]} ">
      <div className='flex text-3xl font-bold justify-between w-11/12 mx-auto '>
        <div className='flex items-center'>
          <PiNotepadFill className='text-4xl'/>
          <h1>Notes App</h1>
        </div>
        <div className='flex gap-5 md:gap-10 text-2xl'>
        <button className='text-xl p-1' onClick={() => {
            if(theme === 'light'){
              setTheme("dark");
              setThemeInStorage('dark')
              document.body.classList.add('dark');
              document.body.style.backgroundColor = '#1a1b1e';
            } else {
              setTheme("light");
              setThemeInStorage('light')
              document.body.classList.remove('dark');
              document.body.style.backgroundColor = '#f1f5f9';
            }
          }}>
            {theme == 'light' && localStorage.getItem('theme') === 'light' ?  <FaSun className='text-slate-800'/> : <FaMoon className='text-white' />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;