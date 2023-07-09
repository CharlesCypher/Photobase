import GridLayout from "../GridLayout/GridLayout";
import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";

const Photos = ({ setSelectedImg }) => {
  const { docs, error } = useFirestore("images");
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <GridLayout>
      {docs
        ?.sort((a, b) => b.createdAt - a.createdAt)
        .map((image) => (
          <motion.div className="relative w-full h-80 cursor-pointer" key={image?.id} layout onClick={() => setSelectedImg(image?.url)}>
            <motion.img
              src={image?.url}
              alt={""}
              className="w-full h-full object-cover rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              loading="lazy"
            />
            <motion.div className="w-full flex justify-between items-center absolute bottom-2 text-white font-caveat text-xl p-3">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="">
                {truncate(image?.user, 20)}
              </motion.p>
              <motion.img src={image?.userPhoto} className="block w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
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
