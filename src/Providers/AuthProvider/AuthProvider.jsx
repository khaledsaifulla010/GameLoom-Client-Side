import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createContext } from "react";
import { auth } from "../../firebase/firebase.config";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // GOOGLE SIGN IN //
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // REGISTER WITH EMAIL & PASSWORD //

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   const updateProfile=()=>{

//   }

  const authInfo = {
    googleSignIn,
    register,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
