import Photos from "../Photos/Photos";
import UploadForm from "../Upload/UploadForm";
import { motion } from "framer-motion";

const Gallery = ({ setSelectedImg }) => {
  return (
    <motion.div className="w-full pb-20">
      <UploadForm />
      <Photos setSelectedImg={setSelectedImg} />
    </motion.div>
  );
};

export default Gallery;
