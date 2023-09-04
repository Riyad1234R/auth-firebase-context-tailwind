import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut}from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext =createContext(null)
const auth =getAuth(app);

const googleAuthProvider= new GoogleAuthProvider();

const AuthProviders = ({children}) => {
     const[user,setUser] =useState(null);
     const [loading,setLoading] =useState(true);
     const creatUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)

     }  
     
     const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
     }

     const signInWithGoogle =()=>{
        return signInWithPopup(auth,googleAuthProvider)
     }

     const logOut=()=>{
        return  signOut(auth,)
     }

     useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,crruntUser=>{
            console.log('auth state change',crruntUser)
            setUser(crruntUser);
            setLoading(false)
        });
        return()=>{
            unsubscribe()
        }
     },[])
     

    const authInfo ={
        user,
        loading,
        creatUser,
        signIn,
        signInWithGoogle, 
       logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
            
        
    );
};

export default AuthProviders;