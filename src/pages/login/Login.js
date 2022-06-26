import React from 'react'
import './Login.scss'

export default function Login() {
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
                    <input type="email" placeholder='email or phone number' />
                    <input type="password" placeholder='password' />
                    <button className='loginButton'>Sign In</button>
                    <span>New to Netflix? <b>Sign up now.</b></span>

                </form>
            </div>
        </div>
    )
}