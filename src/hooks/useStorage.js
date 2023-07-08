import { useEffect, useState } from "react";
import { db, storage } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, file.name);
    const collectionRef = doc(collection(db, "images"));
    const uploadTask = uploadBytesResumable(storageRef, file);

    const unsub = uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        const createdAt = serverTimestamp();
        await setDoc(collectionRef, { url: url, createdAt: createdAt });
        setUrl(url);
      }
    );
    return () => unsub();
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
