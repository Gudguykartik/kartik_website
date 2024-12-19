import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TechCard = ({
  cardInfo,
}: {
  cardInfo: {
    name: string;
    description: string;
    imageUrl: string;
    bgColor: string;
    tooltip?: string;
  };
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, description, imageUrl, bgColor, tooltip } = cardInfo;

  return (
    <div 
      className="relative flex flex-1 gap-5 p-2.5 rounded-xl border border-[#FAFAFA] dark:border-dark-200 bg-[#FAFAFA] dark:bg-dark-200 hover:bg-[#F2F2F2] dark:hover:bg-dark-300 hover:border-[#E0E0E0] dark:hover:border-dark-700 transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`p-3 ${bgColor} rounded-lg w-fit`}>
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          alt={`${name} logo`}
          className={`size-8 ${name === "NextJS" ? "dark:invert" : ""}`}
        />
      </div>
      <div>
        <h4 className="text-lg font-medium">{name}</h4>
        <p className="text-dark-200/70 dark:text-white/70 text-sm">
          {description}
        </p>
      </div>

      <AnimatePresence>
        {isHovered && tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 bottom-full mb-2 z-50 p-4 bg-black/90 dark:bg-dark-100/90 rounded-lg shadow-xl backdrop-blur-sm"
          >
            <p className="text-sm text-white/90 dark:text-stone-200/90">
              {tooltip}
            </p>
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-black/90 dark:bg-dark-100/90" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechCard;
