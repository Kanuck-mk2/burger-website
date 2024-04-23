import React from 'react';
import { motion } from 'framer-motion';
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black text-white py-4 grid grid-cols-3 gap-4 justify-between">
      <div className="">
        <motion.ul
          className=" font-sen ml-2  sm:flex-col lg: flex-col"
          initial={{ opacity: 0, x: -200, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2, type: 'spring' }}
        >
          <li>
            <a href="#about" className="hover:text-orange-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#menu" className="hover:text-orange-300">
              Menu
            </a>
          </li>
          <li>
            <a href="#locations" className="hover:text-orange-300">
              Locations
            </a>
          </li>
          <li>
            <a href="#specials" className="hover:text-orange-300">
              Specials
            </a>
          </li>
          <li>
            <a href="#events" className="hover:text-orange-300">
              Events
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-300">
              Contact Us
            </a>
          </li>
        </motion.ul>
      </div>

      <motion.div
        className=" flex flex-col items-center"
        initial={{ opacity: 0, x: 0, y: 100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2, type: 'spring' }}
      >
        <div className=" m-5 p-4 sm:w-1/4 lg:w-1/4   ">
          <motion.img
            src="/logos/burgerlogo2.png"
            alt="/"
            whileTap={{ rotate: 720 }}
          />
        </div>

        <div>
          <p className="text-white font-bold font-sans text-center">
            {' '}
            &copy; {currentYear}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
