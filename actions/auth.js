'use server'

import { json } from "express/lib/response"
import { resolve } from "styled-jsx/css"
import {cookies} from "next/headers"

function handleErrors(message) {

    const errors = []

    Object.keys(message).map(key => {
        message[key].map(error => {
            errors.push(error)
        })
    })

    return (errors.join())
}


export async function register(State, formData) {

    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')


    const res = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            c_password: confirmPassword
        })
    })

    const data = await res.json()

    if (res.ok) {
        return {
            success: "You are registered"
        }
    } else {
        return {
            error: handleErrors(data)
        }
    }
}

export async function login(State, formData) {

    const email = formData.get('email')
    const password = formData.get('password')


    if (!email || !password) {
        return {
            error: "email and password are required!"
        }
    }


    const res = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })

    const data = await res.json()

    if (res.ok) {

        await cookies().set({
            name: 'token',
            value: data.token,
            httpOnly: true
        })

        return {
            success: "You are logged in",
            user: data.user
        }
    } else {
        return {
            error: handleErrors(data)
        }
    }
}