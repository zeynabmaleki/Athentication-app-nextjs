'use client'

import React, { useActionState, useEffect } from 'react'
import Link from 'next/link'
import { register } from '@/actions/auth'
import { toast } from 'react-toastify'
import SubmitButton from '@/components/SubmitButton'
import { useRouter } from 'next/navigation'


export default function Register() {

    const router = useRouter()
    const [state, formAction] = useActionState(register, {})

    useEffect(() => {
        if (state?.error) {
            toast.error(state?.error)
        } else if (state?.success) {
            toast.success(state?.success)
            router.push("/auth/login")
        }
    }, [state])



    return (
        <div className="flex h-screen flex-col justify-center px-6 py-2 lg:px-8 bg-zinc-800">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-0 text-center text-2xl/9 font-bold tracking-tight text-white">Register</h2>

                <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className="space-y-6" action={formAction}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Username"
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
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
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />


                        <SubmitButton
                            title="Register"
                        />

                        <div className='flex items-center justify-center gap-3 mt-5'>
                            <span className=" text-center text-sm/6 text-gray-400">Already have an account?</span>
                            <Link href="/auth/login" className="font-semibold text-indigo-400 hover:text-indigo-300">Log in</Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}


