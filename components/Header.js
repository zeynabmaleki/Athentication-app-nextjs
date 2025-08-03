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
        <header className=" relative">
            <nav className="fixed top-0 right-0 left-0 mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">

                <div className='flex items-center gap-4 sm:gap-5'>
                    <h2 className="text-lg font-bold text-indigo-500 sm:text-2xl pr-2 sm:pr-5 pb-1">Logo</h2>
                    <Link href="/" className="text-gray-200 hover:text-blue-600 transition-colors text-sm sm:text-base">Home</Link>
                    <Link href="/posts" className="text-gray-200 hover:text-blue-600 transition-colors text-sm sm:text-base">Posts</Link>
                </div>

                <div className="flex">
                    {user ? (
                        <>
                            <span className="px-3 py-2 rounded text-sm sm:px-4 sm:py-2 sm:text-base text-gray-200">
                                {user.name}
                            </span>
                            <button
                                onClick={async () => {
                                    await logout()
                                    logoutContext()
                                    router.push("/auth/login")
                                }}
                                className='px-3 py-2 rounded-4xl bg-indigo-500 text-white hover:bg-indigo-400 transition-colors text-sm sm:px-4 sm:py-2 sm:text-base'>
                                log out
                            </button>
                        </>
                    ) : (
                        <Link href="/auth/login" className="px-3 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-400 transition-colors text-sm sm:px-4 sm:py-2 sm:text-base">
                            Log in / Register
                        </Link>
                    )}
                </div>

            </nav>
        </header >
    )
}
