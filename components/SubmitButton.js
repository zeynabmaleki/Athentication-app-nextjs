'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function SubmitButton({ title }) {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            className={`
                flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500
                ${pending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}
            `}
            disabled={pending}
        >
            <span className="flex items-center justify-center gap-2">
                {title}
                {pending && <span className="animate-spin"><AiOutlineLoading3Quarters /></span>}
            </span>
        </button>
    )
}
