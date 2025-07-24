'use server'

export async function register(State, formData) {
    
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

