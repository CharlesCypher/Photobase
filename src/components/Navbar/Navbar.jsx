import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <header>
      <nav className="w-full h-20 flex justify-between items-center font-caveat">
        <h2 className="text-2xl md:text-3xl font-semibold">
          <Link to="/">Grambase</Link>
        </h2>
        <ul className="hidden md:flex items-center gap-x-10 text-2xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <img src={currentUser?.photoURL} className="hidden sm:block sm:w-8 sm:h-8 rounded-full" />
          <button className="text-xl md:text-2xl border border-black px-4 py-1 sm:px-6 sm:py-2 rounded-md" onClick={() => signOut(auth)}>
            {currentUser ? "Sign out" : "Login"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
