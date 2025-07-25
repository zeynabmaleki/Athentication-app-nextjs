'use server'

import { resolve } from "styled-jsx/css"

export async function register(State, formData) {

    await new Promise(resolve => {
        setTimeout(() => {
            resolve('ok')
        }, 2000)
    })

    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (!name || !email || !password) {
        return {
            error: "Name, email and password is required."
        }
    }

    if (password !== confirmPassword) {
        return {
            error: "Passwords do not match!"
        }
    }
}

