import { useEffect } from "react";
import useStorage from "../../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);
  return <div className="bg-secondary w-0 h-2 rounded-md    " style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
