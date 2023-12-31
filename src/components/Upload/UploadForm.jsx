import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Compressor from "compressorjs";
import ProgressBar from "../Progress/ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [error, setError] = useState(null);
  const changeHandler = (e) => {
    // const types = ["image/svg", "image/png", "image/jpg", "image/webp", "image/jpeg", "image/heic"];
    const selectedImg = e.target.files[0];
    if (selectedImg) {
      new Compressor(selectedImg, {
        quality: 0.8,
        success: (compressedResult) => {
          setCompressedFile(compressedResult);
          setError("");
        },
        error: (err) => {
          setFile(null);
          setError(err.message);
        },
      });
    } else {
      setFile(null);
      setError("Upload must be an image");
    }
  };
  useEffect(() => {
    setFile(compressedFile);
  }, [compressedFile]);
  return (
    <>
      <form className="mb-8" onChange={changeHandler}>
        <motion.div
          className="flex items-center justify-center w-full font-shadow"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-xl text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">SVG, PNG, JPG or WEBP</p>
            </div>
            <input id="dropzone-file" accept="image/*" type="file" className="hidden" />
          </label>
        </motion.div>
      </form>
      {file && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-2">
          {file?.name}
        </motion.p>
      )}
      {file && <ProgressBar file={file} setFile={setFile} />}
      {error && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-4">
          {error}
        </motion.p>
      )}
    </>
  );
};

export default UploadForm;
