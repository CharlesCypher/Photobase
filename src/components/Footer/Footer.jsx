import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center">
      <h4 className="text-xl md:text-2xl font-caveat">
        Made by&nbsp;
        <Link to="https://chiagbaizucharles.vercel.app" target="_blank" className="underline">
          Corizon
        </Link>
        ❤️
      </h4>
    </footer>
  );
};

export default Footer;
