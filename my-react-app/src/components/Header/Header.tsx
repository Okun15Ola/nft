import React from 'react';
import IMAGES from '../../constants/image';

const Header = () => {
  return (
    <main className="container mx-auto md:px-4">
      <div>
        <div className="flex md:flex-row justify-between">
          <div className="flex flex-row pl-3 gap-2 bg-[#19152e] rounded-[10px] w-36 md:w-72 h-[50px] items-center">
            <img src={IMAGES.search} alt="Search" className="w-[25px] h-[25px]" />
            <input
              type="text"
              placeholder="Search Here"
              className="outline-none cursor-pointer bg-transparent text-white dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-600"
            />
          </div>

          {/* Theme Toggle and Notifications */}
          <div className="flex flex-row items-center gap-4">
            <img
              src={IMAGES.mode}
              alt="Mode"
              className="w-6 h-6 cursor-pointer"
              title="Toggle Theme"
            />
            <img src={IMAGES.bell} alt="Bell" className="w-6 h-6" />
            <div className="bg-white dark:bg-gray-800 rounded-full w-[50px] h-[50px]" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
