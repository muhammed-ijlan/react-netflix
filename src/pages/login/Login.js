import React, { useState, useContext } from 'react'
import './Login.scss'
import { login } from '../../authContext/apiCalls'
import { AuthContext } from '../../authContext/AuthContext'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { dispatch } = useContext(AuthContext)

    function handleLogin(e) {
        e.preventDefault();

        try {
            login({ email, password }, dispatch)

        } catch (e) { }
    }
    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">

                    <img className='logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

                </div>
            </div>
            <div className="container">
                <form >
                    <h1>Sign In</h1>
                    <input type="email" placeholder='email or phone number' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                    <button className='loginButton' onClick={handleLogin}>Sign In</button>
                    <span>New to Netflix? <b>Sign up now.</b></span>

                </form>
            </div>
        </div>
    )
}