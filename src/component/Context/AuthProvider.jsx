import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import Loading from '../../Pages/Loading';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const creatUser = (email,password)=>{
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (currentUser,userObj)=>{
        return updateProfile(currentUser,userObj)
    }
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // google login 
    const loginWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const logoutUser=()=>{
        return signOut(auth)
    }
    useEffect(() => {
   const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{
    
        setUser(currentUser)
        setLoading(false)
     })
     return unsubscribe
    }, [])
    
    const value = {
        creatUser,
        loginUser,
        logoutUser,
        user,
        loading,
        setLoading,
        updateUser,
        loginWithGoogle
    }
    return <AuthContext value={value}>
        {loading?<Loading/>:children}
    </AuthContext>
};

export default AuthProvider;