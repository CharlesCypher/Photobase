import GridLayout from "../GridLayout/GridLayout";
import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Trash } from "phosphor-react";
import { collection, deleteDoc, doc, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

const Photos = ({ setSelectedImg }) => {
  const [id, setId] = useState(null);
  const { docs, error } = useFirestore("images");
  const { currentUser } = useContext(AuthContext);
  const collectionRef = collection(db, "images");
  const userRef = doc(db, "images", `${id}`);
  const handleDelete = async () => {
    const likeDocs = query(collectionRef, where("userID", "==", `${currentUser?.uid}`));
    deleteDoc(userRef).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <GridLayout>
      {docs
        ?.sort((a, b) => b.createdAt - a.createdAt)
        .map((image) => (
          <div className="" key={image?.id}>
            <div className="">
              <motion.div className="relative w-full h-80 cursor-pointer" layout onClick={() => setSelectedImg(image?.url)}>
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
            </div>
            <div>
              {currentUser?.uid === image?.userID && (
                <Trash
                  className="top-3 right-3 text-xl sm:text-2xl text-black"
                  onClick={() => {
                    handleDelete(), setId(image?.id);
                  }}
                />
              )}
            </div>
          </div>
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
