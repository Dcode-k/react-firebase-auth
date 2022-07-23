import React, { useContext, useEffect } from 'react'
import { auth } from '../firebase'
const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState()
    const [loading, setLoading] = React.useState(true)

    const signup = async (email, password) => {
        try {
         return await auth.createUserWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error)
        }
  }
  const logout = async () => { 
    try {
        await auth.signOut()
    } catch (error) {
        console.log(error)
    }
  }
    const login = async (email, password) => {
        try {
            return await auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error)
        }
  }
  const forgotPassword = async (email) => {
    try {
      return await auth.sendPasswordResetEmail(email)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
          setCurrentUser(user)
          setLoading(false)
      } else {
        setCurrentUser(null)
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])
    
    const value = {
        currentUser,
        signup,
      login,
      logout,
      forgotPassword,
    }

  return (
      <AuthContext.Provider value={value}>
        {!loading && children }
    </AuthContext.Provider>
  )
}
