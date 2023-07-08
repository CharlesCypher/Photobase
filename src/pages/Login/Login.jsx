import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <main>
      <form></form>
      <button onClick={signInWithGoogle} className="bg-black text-white">
        Google
      </button>
    </main>
  );
};

export default Login;
