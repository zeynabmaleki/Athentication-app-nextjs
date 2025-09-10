# Authentication App
<<<<<<< HEAD
=======

This is a modern authentication application built with Next.js and React. It provides user registration, login, and protected routes with a clean and responsive UI styled using Tailwind CSS.

> **Note:** The api i used for this project (`laravel-api`) is from [https://webprog.io](https://webprog.io). I only created the Next.js app (`next-auth`) for this project.

## Features

- User registration with validation
- User login with authentication state management
- Protected routes for authenticated users
- Responsive design with Tailwind CSS
- Toast notifications for success and error messages
- Simple and clean UI components

## Technologies Used

- Next.js 15.x
- React 19.x
- Tailwind CSS 4.x
- React Toastify for notifications
- React Icons for icons

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd next-auth
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `app/` - Main application pages and routes
- `components/` - Reusable React components
- `context/` - React context for authentication state
- `actions/` - API actions for authentication (login, register)
- `public/` - Static assets like images and icons
- `next.config.mjs` - Next.js configuration
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS
- `package.json` - Project dependencies and scripts

## Usage

- Visit the home page to see the main landing page.
- Register a new user via `/auth/register`.
- Login with existing credentials via `/auth/login`.
- Access protected pages like `/posts` after login.

## License

This project is licensed under the MIT License.
>>>>>>> 532299727fc9dface2736c59df3c608198d5dc5a
