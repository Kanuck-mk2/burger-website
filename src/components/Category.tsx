import React from 'react';
import { categories } from '../data/data';
import { motion } from 'framer-motion';

interface CategoryItem {
  id: number;
  name: string;
  image: string;
}

const Category: React.FC = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <motion.h1
        className="text-orange-400 font-bold  font-sen text-4xl text-center"
        initial={{ opacity: 0, x: 500, y: 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2, type: 'spring' }}
      >
        What's on the <span className="text-gd text-4xl">Street</span>
      </motion.h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item: CategoryItem, index: number) => (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
            <motion.div
              key={index}
              className="bs-color rounded-lg p-4 flex justify-between items-center"
              initial={{ opacity: 0, x: 0, y: 400 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2, type: 'spring' }}
            >
              <h2 className=" bg-transparent font-bold font-sen sm:text-xl">
                {item.name}
              </h2>
              <img src={item.image} alt={item.name} className="w-20" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Category;
