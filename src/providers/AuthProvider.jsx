import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.config";
//create context-1
export const AuthContext =createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser]= useState(null);
  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const singInUser =(email, password)=>{
    return signInWithEmailAndPassword(auth,email ,password)
  }
  // const authInfo = { user,createUser}
  const authInfo = { user,createUser,singInUser}
  useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      console.log('observeing current user',currentUser)
    });

    return () =>{
      unSubscribe();
    }

  },[])

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children:PropTypes.node
} 