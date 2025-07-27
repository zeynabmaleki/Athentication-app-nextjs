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
            router.push("/")
        }
    }, [state])



    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-zinc-100 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form className="flex flex-col gap-4" action={formAction}>
                <input
                    type="text"
                    name="name"
                    placeholder="Username"
                    className="border rounded px-3 py-2"
                />
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
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="border rounded px-3 py-2"
                />


                <SubmitButton title="Register" />

                <div className='flex items-center justify-center gap-3'>
                    <span>Already have an account?</span>
                    <Link href="/auth/login">Log in</Link>
                </div>
            </form>
        </div>
    )
}


