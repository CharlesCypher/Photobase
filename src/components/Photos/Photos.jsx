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
            <motion.div className="w-full flex justify-between items-center absolute bottom-2 text-white font-caveat text-xl px-3 z-20">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="">
                {truncate(image?.user, 16)}
              </motion.p>
              <motion.img src={image?.userPhoto} className="block sm:w-8 sm:h-8 rounded-full" />
            </motion.div>
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
