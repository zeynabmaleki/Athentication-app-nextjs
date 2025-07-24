import React from 'react'
import Link from 'next/link'
import {register} from '@/actions/auth'

export default function Login() {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-zinc-100 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">Log in</h2>
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="border rounded px-3 py-2"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border rounded px-3 py-2"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border rounded px-3 py-2"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-all duration-300"
                >
                    Log in
                </button>
                <div className='flex items-center justify-center gap-3'>
                    <span>Don't have an account?</span>
                    <Link href="./register">Register</Link>
                </div>
            </form>
        </div>
    )
}
