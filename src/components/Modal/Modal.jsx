import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleModal = (e) => {
    if (e.target.classList.contains("bg-backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <>
      <motion.div
        className="fixed inset-0 w-full h-full px-4 md:px-28 bg-backdrop z-30 flex justify-center items-center"
        onClick={handleModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="relative w-full mx-auto h-auto sm:h-[80%] py-0 sm:py-10 bg-primary rounded-xl overflow-hidden z-50"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
        >
          <motion.img src={selectedImg} alt={selectedImg} className="w-full h-full object-contain" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Modal;
