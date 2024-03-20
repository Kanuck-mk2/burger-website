import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <motion.h1
            className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold font-lek bg-transparent"
            initial={{ opacity: 0, x: 500, y: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{ duration: 3, type: 'spring' }}
          >
            The <span className="bg-transparent text-gd">Best</span>
          </motion.h1>
          <motion.h1
            className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold font-lek bg-transparent"
            initial={{ opacity: 0, x: -500, y: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{ duration: 3, type: 'spring' }}
          >
            <span className="text-gd bg-transparent "> Burgers</span> Delivered
          </motion.h1>
        </div>

        <img
          className="w-full max-h-[500px] object-cover"
          src="./food-item/burger2.jpg"
          alt="burger"
        />
      </div>
    </div>
  );
};

export default Home;
