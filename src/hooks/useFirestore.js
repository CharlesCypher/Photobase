import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";

const useFirestore = (collections) => {
  const [docs, setDocs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsub = query(
      collection(db, "images"),
      orderBy("createdAt", "desc"),
      (snapshot) => {
        const documents = [];
        snapshot.forEach((doc) => {
          documents.push({ ...doc?.data(), id: doc?.id });
        });
        setDocs(documents);
      },
      (error) => {
        setError(error);
      }
    );
    return () => unsub();
  }, [collections]);

  return { docs, error };
};

export default useFirestore;
