import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { GoogleLogo } from "phosphor-react";

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
    <main className="font-caveat min-h-[80vh]">
      <div className="w-full h-[70vh] grid place-items-center">
        <button onClick={signInWithGoogle} className="text-xl md:text-2xl border border-black px-4 py-1 sm:px-6 sm:py-2 rounded-md">
          Sign in with Google
        </button>
      </div>
      {error && <p>{error}</p>}
    </main>
  );
};

export default Login;
