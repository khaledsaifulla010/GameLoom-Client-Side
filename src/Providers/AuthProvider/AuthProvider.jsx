import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../../firebase/firebase.config";


export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const googleSignIn = ()=>{
        return signInWithPopup(auth,googleProvider)
    }




    const authInfo = {
      googleSignIn,
    };



    return ( 
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;