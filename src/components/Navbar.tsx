import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { useState } from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);

  const [deliveryMode, setDeliveryMode] = useState<'Delivery' | 'Pickup'>(
    'Delivery',
  );

  const toggleDeliveryMode = () => {
    setDeliveryMode((prevMode) =>
      prevMode === 'Delivery' ? 'Pickup' : 'Delivery',
    );
  };

  return (
    <div className=" fixed w-full mx-auto flex justify-between items-center p-4 z-[999] ">
      <div className="flex items-center">
        <motion.div
          onClick={() => setNav(!nav)}
          className="cursor-pointer"
          initial={{ opacity: 0, x: 500, y: 0 }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 720,
          }}
          transition={{ duration: 2, type: 'spring' }}
        >
          <AiOutlineMenu
            size={30}
            aria-label="Toggle Menu"
            className="text-white"
          />
        </motion.div>
        <motion.h1
          className=" bg-transparenttext-2xl sm:text-3xl lg:4xl px-2
           text-white font-bold font-lek"
          initial={{ opacity: 0, x: 0, y: -300 }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{ duration: 2, type: 'spring' }}
        >
          {' '}
          Burger{' '}
          <span className="text-gd text-white bg-transparent">Street</span>
        </motion.h1>
        <motion.button
          onClick={toggleDeliveryMode}
          className="sm:ml-4  lg:flex items-center  bs-color rounded-full p-1 text-[14px]"
          initial={{ opacity: 0, x: 0, y: -200 }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{ duration: 2, type: 'spring' }}
        >
          <motion.p
            className="bg-black text-orange-400 font-mono  rounded-full p-2  "
            initial={{ opacity: 0, x: 0, y: -200 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: deliveryMode === 'Delivery' ? 720 : -720,
            }}
            transition={{
              duration: 2,
              type: deliveryMode === 'Delivery' ? 'spring' : 'spring',
            }}
          >
            {deliveryMode}
          </motion.p>
        </motion.button>
      </div>
      <motion.div
        className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]"
        initial={{ opacity: 0, x: 0, y: -200 }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{ duration: 2, type: 'spring' }}
      >
        <AiOutlineSearch className="bg-gray-200 rounded-full" size={30} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search Items"
        />
      </motion.div>
      <motion.button
        type="button"
        className="bg-black  text-white hidden md:flex items-center p-4 rounded-full 
        glow-border"
        initial={{ opacity: 0, x: 500, y: 0 }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 360,
        }}
        transition={{ duration: 2, type: 'spring' }}
        whileTap={{ scale: 0.5 }}
      >
        <BsFillCartFill className="bg-black   mr-2" size={20} />
        cart
      </motion.button>

      {nav && (
        <div className="bg-slate-800/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      )}

      <div
        className={`fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 ${
          nav ? '' : 'left-[-100%]'
        }`}
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer text-white"
        />
        <h2 className="text-2xl p-4 text-white font-lek">
          Burger <span className="text-gd">Street</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-white ">
            <li className="text-xl py-4 font-lek">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 font-lek">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 font-lek">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 font-lek">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 font-lek">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 font-lek">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className="text-xl py-4 font-lek">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
