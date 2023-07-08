import useFirestore from "../../hooks/useFirestore";

const Card = () => {
  const { docs, error } = useFirestore("images");
  return (
    <>
      {docs?.map((image) => (
        <div className="w-full h-80" key={image?.id}>
          <img src={image?.url} className="w-full h-full object-cover rounded-md" />
        </div>
      ))}
    </>
  );
};

export default Card;
