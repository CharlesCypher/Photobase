import useFirestore from "../../hooks/useFirestore";

const Card = () => {
  const { docs, error } = useFirestore("images");
  console.log(docs);
  return <div></div>;
};

export default Card;
