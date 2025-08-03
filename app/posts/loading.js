import React from 'react'

export default function Loading() {
    return (
        <div className='flex h-screen flex-col justify-center px-6 py-2 lg:px-8 bg-zinc-800'>
            <h2 className='mb-15 text-center text-3xl font-bold  text-white'>
                Loading posts . . .
            </h2>
        </div>
    )
}
