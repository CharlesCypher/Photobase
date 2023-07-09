import { useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import Modal from "../../components/Modal/Modal";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div>
      <Hero />
      <Gallery selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      <AnimatePresence>
        {selectedImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
