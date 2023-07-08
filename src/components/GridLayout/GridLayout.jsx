import { motion } from "framer-motion";

const GridLayout = ({ children }) => {
  return (
    <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {children}
    </motion.div>
  );
};

export default GridLayout;
