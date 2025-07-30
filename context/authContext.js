'use client'

import { createContext, useEffect, useState } from "react"
import { me } from '@/actions/auth'


const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            const data = await me()

            if (data?.error) {
                // console.log("error  from authContext")
                setUser(null)
            } else {
                // console.log(data?.user, "success from checkUserLoggedIn")
                setUser(data?.user)
            }


        }
        checkUserLoggedIn()

    }, [])


    const loginContext = (user) => {
        setUser(user)
    }

    const logoutContext = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, loginContext, logoutContext }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext
