import firebase from './firebase'
import React, {createContext, useContext, useState} from 'react'
import {createUser} from './db'

const AuthContext = createContext()

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
  const auth = useProvideAuth()
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

const useProvideAuth = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)


  const handleUser = (rawUser) => {
    if(rawUser){
      const user = formatUser(rawUser)
      setUser(user)
      createUser(user)
      console.log('user created/login successful')
      return user
    }
    else{
      setUser(false)
      setLoading(false);
      return false;
    }
  }


  const signInWithGithub = () => {
      const result = firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()).then((response) => {
          const token = response.credential.accessToken;
          setLoading(true);
          handleUser(response.user);
        }).catch((error)=> {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
        });
        return result
  }

  const signInWithEmail = () => {
      const result = firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((response) => {
          const token = response.credential.accessToken;
          setLoading(true);
          handleUser(response.user);
        }).catch((error)=> {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
        });
        return result
  }

  const signout = () => {
      const result = firebase.auth().signOut().then(function() {
          console.log('signout successful')
          handleUser(null)
        }).catch(function(error) {
          console.log('some error while sign-out user')
        });
        return result
  }

  return {user,loading,signInWithGithub, signInWithEmail, signout}
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.xa,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    // stripeRole: await getStripeRole()
  };
}



export {useAuth, AuthProvider}