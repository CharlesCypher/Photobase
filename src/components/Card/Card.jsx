import { useContext } from "react";
import useFirestore from "../../hooks/useFirestore";
import { AuthContext } from "../../context/AuthContext";
import { motion } from "framer-motion";

const Card = () => {
  const { docs, error } = useFirestore("images");
  return (
    <>
      {docs?.map((image) => (
        <motion.div className="w-full h-80" key={image?.id} layout>
          <motion.img src={image?.url} alt={""} className="w-full h-full object-cover rounded-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          <p>{image?.user}</p>
        </motion.div>
      ))}
    </>
  );
};

export default Card;
