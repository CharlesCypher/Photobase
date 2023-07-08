import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const Navbar = () => {
  return (
    <header>
      <nav className="w-full h-20 flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-semibold">
          <Link to="/">Grambase</Link>
        </h2>
        <ul className="hidden md:flex gap-x-10 text-base md:text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Photos</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
        <button className="text-base md:text-lg border border-black px-6 py-2 rounded-md" onClick={() => signOut(auth)}>
          Sign out
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
