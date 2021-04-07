import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'
import { doesUsernameExist } from '../services/firebase'


export default function SignUp() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')
    const isInvalid = username === '' || fullName === '' || emailAddress === '' || password === '';

    const handleSignUp = async (event) => {
        event.preventDefault()

        const usernameExists = await doesUsernameExist(username)
        if (!usernameExists.length) {
            try {
                const createdUserResult = await firebase.auth().createUserWithEmailAndPassword
                    (emailAddress, password);

                await createdUserResult.user.updateProfile({
                    displayName: username
                })

                await firebase.firestore().collection('users').add({
                    userId: createdUserResult.user.uid,
                    username: username.toLowerCase(),
                    fullName,
                    emailAddress: emailAddress.toLowerCase(),
                    following: [],
                    followers: [],
                    dateCreated: Date.now()
                })
            } catch (error) {
                setFullName('')
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            }
        } else {
            setUsername('');
            setFullName('');
            setEmailAddress('');
            setPassword('');
            setError('That username is already taken, please try another!')
        }
    }

    useEffect(() => {
        document.title = 'Sign Up - Instagram'
    }, [])

    return (
        <div className="container flex mx-auto max-w-xs items-center h-screen">
            <div className="flex flex-col">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-500">{error}</p>}

                    <form onSubmit={handleSignUp} method="POST">
                        <input
                            aria-label="username"
                            type="text"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            placeholder="Username"
                            value={username}
                            onChange={({ target }) => setUsername(target.value.toLowerCase())}
                        />
                        <input
                            aria-label="fullName"
                            type="text"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={({ target }) => setFullName(target.value)}
                        />
                        <input
                            aria-label="emailAddress"
                            type="email"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value.toLowerCase())}
                        />
                        <input
                            aria-label="password"
                            type="password"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            placeholder="Password"
                            value={password}
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
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Have an account?{' '}
                        <Link to={ROUTES.LOGIN} className="font-bold text-blue">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}