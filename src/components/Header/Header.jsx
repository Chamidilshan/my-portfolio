import React, { useState, useEffect } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='w-full h-20 flex items-center'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span className='w-9 h-9 bg-primaryColor text-white text-lg font-medium rounded-full flex items-center justify-center'>
              C
            </span>

            <div className='leading-5'>
              <h2 className='text-xl text-smallTextColor font-bold'>
                Chamika
              </h2>
              <p className='text-smallTextColor text-sm font-medium'>
                portfolio
              </p>
            </div>
          </div>
          <div className='menu hidden sm:flex'>
            <ul className='flex items-center gap-10'>
              <li><a className='text-smallTextColor font-semibold' href='#about'>About</a></li>
              <li><a className='text-smallTextColor font-semibold' href='#experience'>Experience</a></li>
              <li><a className='text-smallTextColor font-semibold' href='#projects'>Projects</a></li>
              <li><a className='text-smallTextColor font-semibold' href='#contact'>Contact</a></li>
            </ul>
          </div>
          {/* <div className='flex items-center gap-4'>
            <button onClick={toggleDarkMode} className='flex items-center gap-2 text-smallTextColor font-semibold border border-solid border-smallTextColor py-2 px-4 rounded-lg max-h-10 hover:bg-smallTextColor hover:text-white hover:font-medium ease-in duration-300'>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <span className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
              <i className='ri-menu-line'></i>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;