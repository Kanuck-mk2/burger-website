import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

const Home = () => {
  const images = [
    './bg-slides/bg-burger1.jpg',
    './bg-slides/burger2.jpg',
    './bg-slides/bg-burger2.jpg',
    './bg-slides/bg-milkshake.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <motion.h1
            className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold font-sen bg-transparent"
            initial={{ opacity: 0, x: 500, y: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{ duration: 3, type: 'spring' }}
            style={{ zIndex: 499 }}
          >
            The <span className="bg-transparent text-gd">Best</span>
          </motion.h1>
          <motion.h1
            className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold font-sen bg-transparent"
            initial={{ opacity: 0, x: -500, y: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{ duration: 3, type: 'spring' }}
            style={{ zIndex: 499 }}
          >
            <span className="text-gd bg-transparent"> Burgers</span> Delivered
          </motion.h1>
        </div>
        <div>
          <motion.img
            key={currentImage}
            className="w-full max-h-[500px] object-cover"
            src={images[currentImage]}
            initial={{ opacity: 0, x: currentImage % 2 === 0 ? -200 : 200 }}
            animate={{ opacity: 0.5, x: 0, scale: 1.2 }}
            exit={{ opacity: 0 }}
            alt="burger"
            transition={{ duration: 3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
