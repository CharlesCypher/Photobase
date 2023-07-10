import { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import { AnimatePresence, motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);
  return (
    <AnimatePresence>
      <motion.div
        className="bg-secondary w-0 h-2 rounded-md mb-4"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: progress + "%" }}
        exit={{ opacity: 0 }}
      ></motion.div>
    </AnimatePresence>
  );
};

export default ProgressBar;
