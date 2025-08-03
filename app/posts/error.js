'use client'

import React from 'react'

export default function Error({ error, reset }) {
    return (
        <div className='flex h-screen flex-col justify-center px-6 py-2 lg:px-8 bg-zinc-800'>

            <h2 className='mb-15 text-center text-3xl font-bold  text-white '>
                Something went wrong {error.massage}
            </h2>
            <button
                className='text-indigo-400 hover:text-indigo-300 text-2xl'
                onClick={() => reset()} >
                try again
            </button>
        </div>
    )
} 
