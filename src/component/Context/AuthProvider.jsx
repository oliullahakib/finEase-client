import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
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
        setLoading
    }
    return <AuthContext value={value}>
        {children}
    </AuthContext>
};

export default AuthProvider;