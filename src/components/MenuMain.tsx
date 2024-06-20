import React, { useState } from 'react';
import { data } from '../data/data';
import { motion } from 'framer-motion';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
}

const MenuMain: React.FC = () => {
  console.log(data);

  const [menuMain, setMenuMain] = useState<MenuItem[]>(data);

  const filterType = (category: string) => {
    setMenuMain(
      data.filter((item: MenuItem) => {
        return item.category === category;
      }),
    );
  };

  const filterPrice = (price: string) => {
    setMenuMain(
      data.filter((item: MenuItem) => {
        return item.price === price;
      }),
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 overflow-x-hidden">
      <motion.h1
        className="text-gd2 font-bold text-4xl text-center"
        initial={{ opacity: 0, x: -500, y: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 1 },
        }}
      >
        <strong className="text-gd text-4xl">Menu</strong>
      </motion.h1>

      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold font-sen text-white">Type Filter</p>
          <motion.div
            className="flex justify-between flex-wrap"
            initial={{ opacity: 0, x: -200, y: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{ duration: 2, type: 'spring' }}
          >
            <motion.button
              onClick={() => setMenuMain(data)}
              type="button"
              className="m-1 w-20 text-2xl text-gd hover:bg-orange-600 hover:text-white"
              whileTap={{ scale: 0.5 }}
            >
              All
            </motion.button>
            <motion.button
              onClick={() => filterType('burger')}
              type="button"
              className="m-1 w-20 text-2xl text-gd hover:bg-orange-600 hover:text-white"
              whileTap={{ scale: 0.5 }}
            >
              Burgers
            </motion.button>
            <motion.button
              onClick={() => filterType('fries')}
              type="button"
              className="m-1 w-20 text-2xl text-gd hover:bg-orange-600 hover:text-white"
              whileTap={{ scale: 0.5 }}
            >
              Fries
            </motion.button>
            <motion.button
              onClick={() => filterType('hot dogs')}
              type="button"
              className="m-1 w-20 text-2xl text-gd hover:bg-orange-600 hover:text-white"
              whileTap={{ scale: 0.5 }}
            >
              Hot Dogs
            </motion.button>
            <motion.button
              onClick={() => filterType('drinks')}
              type="button"
              className="m-1 w-20 text-2xl text-gd hover:bg-orange-600 hover:text-white"
              whileTap={{ scale: 0.5 }}
            >
              Drinks
            </motion.button>
          </motion.div>
        </div>
        <div>
          <p className="font-bold font-sen text-white">Type Price</p>
          <motion.div
            className="flex justify-between max-w-[390px] w-full"
            initial={{ opacity: 0, x: 500, y: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{ duration: 2, type: 'spring' }}
          >
            <motion.button
              onClick={() => filterPrice('$')}
              type="button"
              className="m-1 text-2xl text-gd hover:bg-orange-600 hover:text-white"
              whileTap={{ scale: 0.5, rotate: 720 }}
            >
              $
            </motion.button>
            <motion.button
              onClick={() => filterPrice('$$')}
              type="button"
              className="m-1 text-2xl text-gd hover:bg-orange-600 hover:text-white"
              whileTap={{ scale: 0.5, rotate: 720 }}
            >
              $$
            </motion.button>
            <motion.button
              onClick={() => filterPrice('$$$')}
              type="button"
              className="m-1 text-2xl text-gd hover:bg-orange-600 hover:text-white"
              whileTap={{ scale: 0.5, rotate: 720 }}
            >
              $$$
            </motion.button>
            <motion.button
              onClick={() => filterPrice('$$$$')}
              type="button"
              className="m-1 text-2xl rounded-full text-gd hover:bg-orange-600 hover:text-white"
              whileTap={{ scale: 0.5, rotate: 720 }}
            >
              $$$$
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {menuMain.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-lg over:scale-105"
            initial={{ opacity: 0, x: -500, y: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{ duration: 2, type: 'spring' }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -20 }}
              whileTap={{ scale: 0.5 }}
              className="glow-border rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold text-white font-sen">{item.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MenuMain;
