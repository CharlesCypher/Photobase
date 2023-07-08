import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const Navbar = () => {
  return (
    <header>
      <nav className="w-full h-20 flex justify-between items-center">
        <h2 className="text-base">Grambase</h2>
        <ul className="hidden md:flex gap-x-10 text-base">
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
        <button className="text-base" onClick={() => signOut(auth)}>
          Sign out
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
