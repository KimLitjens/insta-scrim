import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'

export default function SignUp() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')
    const isInvalid = username === '' || fullName === '' || emailAddress === '' || password === '';



    return (
        <div className="container flex mx-auto max-w-xs items-center h-screen">
            <div className="flex flex-col">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-500">{error}</p>}

                    <form action="">
                        <input
                            aria-label="username"
                            type="text"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            placeholder="Username"
                            onChange={({ target }) => setUsername(target.value)}
                        />
                        <input
                            aria-label="fullName"
                            type="text"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            placeholder="Full Name"
                            onChange={({ target }) => setFullName(target.value)}
                        />
                        <input
                            aria-label="emailAddress"
                            type="text"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            placeholder="EmailAddress"
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <input
                            aria-label="password"
                            type="text"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-500 text-white w-full rounded h-8 front-bold ${isInvalid && 'cursor-not-allowed opacity-50'}`}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}