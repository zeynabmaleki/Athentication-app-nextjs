'use client'

import React, { useContext } from 'react'
import Link from 'next/link'
import AuthContext from '@/context/authContext'
import { useRouter } from 'next/navigation'
import { logout } from '@/actions/auth'  

export default function Header() {

    const { user, logoutContext } = useContext(AuthContext)
    const router = useRouter()

    return (
        <header className="flex items-center justify-between px-6 py-2 bg-white shadow-md lg:px-20 sm:py-4 sm:px-12">
            <div className="flex items-center gap-4 sm:gap-8">
                <h2 className="text-lg font-bold text-blue-600 sm:text-2xl">Logo</h2>
                <nav className="hidden sm:flex gap-3 sm:gap-6">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base">Home</Link>
                    <Link href="/posts" className="text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base">Posts</Link>
                </nav>
            </div>
            <div className="flex gap-2 sm:gap-4">
                {user ? (
                    <>
                        <span className="px-3 py-2 rounded  text-sm sm:px-4 sm:py-2 sm:text-base">
                            {user.name}
                        </span>
                        <button
                            onClick={async () => {
                                await logout()
                                logoutContext()
                                router.push("/auth/login")
                            }}
                            className='px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors text-sm sm:px-4 sm:py-2 sm:text-base'>
                            log out
                        </button>
                    </>
                ) : (
                    <Link href="/auth/login" className="px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors text-sm sm:px-4 sm:py-2 sm:text-base">
                        Log in / Register
                    </Link>
                )}


            </div>
        </header >
    )
}
