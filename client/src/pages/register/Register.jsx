import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span class="registerTitle">Register</span>
            <form action="" className="registerForm">
                <label for="">Username</label>
                <input className="registerInput" type="text" placeholder="Enter your Username..." />

                <label for="">Email</label>
                <input className="registerInput" type="email" placeholder="Enter your Email..." />
                <label for="">Password</label>
                <input className="registerInput" type="password" placeholder="Enter your Password..." />
                <button class="registerButton"><Link className='link' to="/register">REGISTER</Link></button>

            </form>
            <button class="registerLoginButton"><Link className='link' to="/login">LOGIN</Link></button>
        </div>
    )
}
