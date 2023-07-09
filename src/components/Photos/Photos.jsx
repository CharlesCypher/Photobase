import GridLayout from "../GridLayout/GridLayout";
import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";

const Photos = () => {
  const { docs, error } = useFirestore("images");
  return (
    <GridLayout>
      {docs
        ?.sort((a, b) => b.createdAt - a.createdAt)
        .map((image) => (
          <motion.div className="w-full h-80 cursor-pointer" key={image?.id} layout>
            <motion.img
              src={image?.url}
              alt={""}
              className="w-full h-full object-cover rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              loading="lazy"
            />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-black">
              {image?.user}
            </motion.p>
          </motion.div>
        ))}
      {error && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {error?.message}
        </motion.p>
      )}
    </GridLayout>
  );
};

export default Photos;
