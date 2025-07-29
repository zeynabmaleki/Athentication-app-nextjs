'use client'

import { createContext, useState } from "react"



const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const loginContext = (user) => {
        setUser(user)
    }

    return (
        <AuthContext.Provider value={{user, loginContext}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext
