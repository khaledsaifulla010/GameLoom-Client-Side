import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [userEmail, setUserEmail] = useState(null);
  const [email,setEmail] = useState(null)

  // GOOGLE SIGN IN //
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // REGISTER WITH EMAIL & PASSWORD //

  const register = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LOGIN WITH EMAIL & PASSWORD //

  const login = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Current User //

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setUserEmail(currentUser.email);
        setEmail(currentUser.email);
        setLoading(false);
      } else {
        setUser(null);
      }
    });
    return () => {
      unSubscribe;
    };
  }, []);

  // Logout User //

  const logoutUser = () => {
    setLoading(false);
    return signOut(auth);
  };

  const authInfo = {
    googleSignIn,
    register,
    login,
    user,
    logoutUser,
    loading,
    userEmail,
    email,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
