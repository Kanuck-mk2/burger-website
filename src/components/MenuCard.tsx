import { motion } from 'framer-motion';

interface MenuCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

const MenuCard: React.FC<MenuCardProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
}) => {
  return (

    <motion.div
      className="rounded-xl relative"
      initial={{ opacity: 0, x: 500, y: 0 }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 2, type: 'spring' },
      }}
      whileHover={{ y: -30 }}
    whileTap={{scale: 0.5}}
    >
      
      <div className="absolute w-full h-full bg-black bg-opacity-50 rounded-xl text-white glow-border "
      >
        <p className="bg-transparent font-bold text-2xl text-gd px-2 pt-4 ">
          {title}
        </p>
        <p className="bg-transparent px-2 font-sen font-bold">{description}</p>
        <button
          type="button"
          className="border-white font-bold font-sen bs-color mx-2 p-2 absolute bottom-4 rounded-lg"
        >
          {buttonText}
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src={imageUrl}
        alt="burgermenu1"
      />
    </motion.div>
  );
};

export default MenuCard;
