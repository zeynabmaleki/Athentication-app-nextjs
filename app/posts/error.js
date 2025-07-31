'use client'

import React from 'react'

export default function Error({ error, reset }) {
    return (
        <div>
            <h2>Something went wrong - {error.massage}</h2>
            <button onClick={() => reset()} >
                try again
            </button>
        </div>
    )
} 
