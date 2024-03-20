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
      <h1 className="text-orange-600 font-bold  font-lek text-4xl text-center">
        Top <strong className="text-gd text-4xl">Rated</strong> Menu Items
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item: CategoryItem, index: number) => (
          <div
            key={index}
            className="bs-color rounded-lg p-4 flex justify-between items-center"
          >
            <h2 className=" bg-transparent font-bold font-lek sm:text-xl">
              {item.name}
            </h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
