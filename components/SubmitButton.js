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
                bg-blue-500 text-white rounded px-4 py-2 
                transition-all duration-300
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