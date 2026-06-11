import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { useEffect, useState } from 'react';

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] =useState(true)
    const registerUser = (email,password) =>{
        setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    useEffect(()=>{
        
    },[])
    const authInfo = {
      user,
      loading,
       registerUser,
       signInUser,
       googleSignIn
    }
    return (
        <AuthContext value={authInfo}>
      {children}
        </AuthContext>
    );
};

export default AuthProvider;