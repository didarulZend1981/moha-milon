import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

  const logOut = () =>{
    return signOut(auth);
  }
  useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      console.log('observeing current user',currentUser)
    });

    return () =>{
      unSubscribe();
    }

  },[])


  const authInfo = { 
    user,
    createUser,
    singInUser,
    logOut
  
  }


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