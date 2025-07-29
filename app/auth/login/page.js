'use client'

import React, { useActionState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { login } from '@/actions/auth'
import { toast } from 'react-toastify'
import SubmitButton from '@/components/SubmitButton'
import { useRouter } from 'next/navigation'
import AuthContext from '@/context/authContext'


export default function Login() {

    const router = useRouter()
    const [state, formAction] = useActionState(login, {})
    const { loginContext } = useContext(AuthContext)

    useEffect(() => {
        if (state?.error) {
            toast.error(state?.error)
        }
        else if (state?.success) {
            toast.success(state?.success)
            loginContext(state?.user)
            router.push("/")
        }
    }, [state])

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-zinc-100 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">Log in</h2>
            <form className="flex flex-col gap-4" action={formAction}>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border rounded px-3 py-2"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border rounded px-3 py-2"
                />

                <SubmitButton title="Log in" />


                <div className='flex items-center justify-center gap-3'>
                    <span>Don't have an account?</span>
                    <Link href="./register">Register</Link>
                </div>
            </form>
        </div>
    )
}
