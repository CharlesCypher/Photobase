import GridLayout from "../GridLayout/GridLayout";
import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";

const Photos = () => {
  const { docs, error } = useFirestore("images");
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <GridLayout>
      {docs
        ?.sort((a, b) => b.createdAt - a.createdAt)
        .map((image) => (
          <motion.div className="relative w-full h-80 cursor-pointer" key={image?.id} layout>
            <motion.img
              src={image?.url}
              alt={""}
              className="w-full h-full object-cover rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              loading="lazy"
            />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute left-4 bottom-2 text-white font-caveat text-xl">
              {truncate(image?.user, 12)}
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
