import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      setError(error?.message);
    }
  };
  return (
    <main className="font-caveat">
      <form></form>
      <button onClick={signInWithGoogle} className="text-xl md:text-2xl border border-black px-4 py-1 sm:px-6 sm:py-2 rounded-md">
        Google
      </button>
      {error && <p>{error}</p>}
    </main>
  );
};

export default Login;
