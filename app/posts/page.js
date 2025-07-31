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
        <div>
            <h2>posts:</h2>
            <div>
                {posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
