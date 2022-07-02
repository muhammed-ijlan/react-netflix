import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { AuthContext } from './../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const { dispatch } = useContext(AuthContext)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <Link className='link' to='/'>
                        <img src="https://pbs.twimg.com/media/E4a2Tc1XMAAEcF2?format=png&name=4096x4096" alt="logo" />
                    </Link>

                    <Link className='link' to='/'>
                        <span>Home Page</span>
                    </Link>

                    <Link className='link' to='/series'>
                        <span>Series</span>
                    </Link>

                    <Link className='link' to="/movies">
                        <span>Movies</span>
                    </Link>

                    <span>New And Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="" />

                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Logout</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar