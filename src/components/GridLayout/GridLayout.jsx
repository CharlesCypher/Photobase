import { motion } from "framer-motion";

const GridLayout = ({ children }) => {
  return <motion.div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">{children}</motion.div>;
};

export default GridLayout;
