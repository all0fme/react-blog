import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'

export default function TopBar() {
    const user = true;
    return (
        <div className='top'>
            <div class="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
            </div>
            <div class="topCenter">
                <ul className='topList'>
                    <li className="topListItem"><Link className='link' to="/">HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/write" >ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write" >CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>
                    <li className="topListItem"><Link className="link" to="/write" >{user && "LOGOUT"}</Link></li>

                </ul>
            </div>
            <div class="topRight">
                {user ? (<img className="topImg" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3QlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" srcset="" />) :
                    (
                        <ul className='topList'>
                            <li className="topListItem"><Link className='link' to="/login">LOGIN</Link></li>
                            <li className="topListItem"> <Link className='link' to="/register">REGISTER</Link></li>


                        </ul>


                    )
                }

                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
