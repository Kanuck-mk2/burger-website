
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

interface DarkButtonModeProps {
  darkMode: boolean;
  onClick: () => void;
}

const DarkButtonMode: React.FC<DarkButtonModeProps> = ({ darkMode, onClick }) => {
  return (
    <button
      type="button"
      className={`bg-black text-white hidden md:flex items-center p-4 rounded-full ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
      onClick={onClick}
    >
      {darkMode ? <BsSun className="mr-2" size={20} /> : <BsMoon className="mr-2" size={20} />}
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkButtonMode;
