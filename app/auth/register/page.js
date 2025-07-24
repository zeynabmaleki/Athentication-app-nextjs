'use client'

import React, { useActionState } from 'react'
import Link from 'next/link'
import { register } from '@/actions/auth'

export default function Register() {
    const [state, formAction] = useActionState(register, {})

    console.log(state?.error);
    

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-zinc-100 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form className="flex flex-col gap-4" action={formAction}>
                <input
                    type="text"
                    name="name"
                    placeholder="Username"
                    className="border rounded px-3 py-2"
                    // required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border rounded px-3 py-2"
                    // required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border rounded px-3 py-2"
                    // required
                />
                <input
                    type="password"
                    name="confirmPassword" 
                    placeholder="Confirm Password"
                    className="border rounded px-3 py-2"
                    // required
                />
                {state?.error && (
                    <div className="text-red-500 text-sm text-center">{state.error}</div>
                )}
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-all duration-300"
                >
                    Register
                </button>
                <div className='flex items-center justify-center gap-3'>
                    <span>Already have an account?</span>
                    <Link href="/auth/login">Log in</Link>
                </div>
            </form>
        </div>
    )
}


