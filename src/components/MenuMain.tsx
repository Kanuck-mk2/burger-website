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
      data.filter((item: string) => {
        return item.category === category;
      }),
    );
  };

  const filterPrice = (price: string) => {
    setMenuMain(
      data.filter((item: string) => {
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
        Top <strong className="text-gd text-4xl">Rated</strong> Menu Items
      </motion.h1>

      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold font-lek text-white">Type Filter</p>
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
            <button
              onClick={() => setMenuMain(data)}
              type="button"
              className="m-1 w-20   text-2xl text-gd hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              type="button"
              className="m-1 w-20 text-2xl text-gd hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('fries')}
              type="button"
              className="m-1 w-20 text-2xl text-gd hover:bg-orange-600 hover:text-white"
            >
              Fries
            </button>
            <button
              onClick={() => filterType('hot dogs')}
              type="button"
              className="m-1 w-20 text-2xl text-gd hover:bg-orange-600 hover:text-white"
            >
              Hot Dogs
            </button>
            <button
              onClick={() => filterType('drinks')}
              type="button"
              className="m-1 w-20 text-2xl text-gd hover:bg-orange-600 hover:text-white"
            >
              Drinks
            </button>
          </motion.div>
        </div>
        <div>
          <p className="font-bold font-lek text-white">Type Price</p>
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
            <button
              onClick={() => filterPrice('$')}
              type="button"
              className="m-1  text-2xl text-gd hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              type="button"
              className="m-1 text-2xl text-gd hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              type="button"
              className="m-1 text-2xl text-gd hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              type="button"
              className="m-1 text-2xl  rounded-full text-gd hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </motion.div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {menuMain.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-lg over:scale-105 glow-border"
            initial={{ opacity: 0, x: -500, y: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{ duration: 1, type: 'spring' }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold text-white font-lek">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MenuMain;
