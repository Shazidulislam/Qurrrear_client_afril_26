import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data , setData] = useState(null)

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    const Provider = new GoogleAuthProvider();
    return signInWithPopup(auth, Provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User in the auth state change", currentUser);
      setLoading(false);
    });

    return () => {
      unsubCribe();
    };
  }, []);

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await fetch("data/data.json");
      const data = await res.json()
      setData(data);
      console.log(data)
    }
    return()=>{
       fetchData()
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    signInWithGoogle,
    data,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
}
