import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span class="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label for="">Email</label>
                <input className="loginInput" type="email" placeholder="Enter your Email..." />
                <label for="">Password</label>
                <input className="loginInput" type="password" placeholder="Enter your Password..." />
                <button class="loginButton"><Link className='link' to="/login">LOGIN</Link></button>

            </form>
            <button class="loginRegisterButton"><Link className='link' to="/register">REGISTER</Link></button>
        </div>
    )
}
