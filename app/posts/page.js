import React from 'react'

const getPosts = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/posts', {
        method: 'GET',
        cache: 'no-store'
    })

    if (res.ok) {
        const data = await res.json()
        return data.posts
    } else {
        throw new Error(res.status)
        // error: res.status
    }
}


export default async function posts() {

    const posts = await getPosts()

    return (

        <div className='grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-5  pt-23 h-auto justify-center items-stretch px-6 py-2 lg:px-8 bg-zinc-800 '>
            {posts.map(post => (
                <div
                    key={post.id}
                    className='flex flex-col mb-5 sm:mx-auto sm:w-full sm:max-w-sm border border-zinc-600 rounded-2xl p-3'
                >
                    <h2 className='text-gray-50 text-lg'>
                        {post.title}
                        </h2>
                    <p className='text-gray-300 text-sm'>
                        {post.body}
                        </p>
                </div>
            ))}
        </div>

    )
}
