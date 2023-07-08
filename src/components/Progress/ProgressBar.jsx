import { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);
  return <motion.div className="bg-secondary w-0 h-2 rounded-md mb-4" initial={{ width: 0 }} animate={{ width: progress + "%" }}></motion.div>;
};

export default ProgressBar;
