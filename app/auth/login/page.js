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
        <div className="flex h-screen flex-col justify-center px-6 py-2 lg:px-8 bg-zinc-800">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-0 text-center text-2xl/9 font-bold tracking-tight text-white">Log in</h2>

                <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className="space-y-6" action={formAction}>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                        <SubmitButton title="Log in" />
                        <div className='flex items-center justify-center gap-3'>
                            <span className=" text-center text-sm/6 text-gray-400">Don't have an account?</span>
                            <Link href="./register" className="font-semibold text-indigo-400 hover:text-indigo-300">Register</Link>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}
