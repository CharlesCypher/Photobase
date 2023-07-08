import Photos from "../Photos/Photos";
import UploadForm from "../Upload/UploadForm";

const Gallery = () => {
  return (
    <section className="w-full py-20">
      <UploadForm />
      <Photos />
    </section>
  );
};

export default Gallery;
