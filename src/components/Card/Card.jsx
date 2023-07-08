import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";

const Card = () => {
  const { docs, error } = useFirestore("images");
  return (
    <>
      {docs?.map((image) => (
        <motion.div className="w-full h-80 cursor-pointer" key={image?.id} layout>
          <motion.img
            src={image?.url}
            alt={""}
            className="w-full h-full object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            loading="lazy"
          />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {image?.user}
          </motion.p>
        </motion.div>
      ))}
    </>
  );
};

export default Card;
