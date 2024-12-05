import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
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


  // LOGIN WITH EMAIL & PASSWORD //

  const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }


  const authInfo = {
    googleSignIn,
    register,
    login
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
