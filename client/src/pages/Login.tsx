// import { useState } from "react";
import "./pageStyles/login.css";


const Login = () => {
    // const [name, setName] = useState<string>();
    return (
        <div className="login-container">
            <div className="loginForm">
                <h3>Login</h3>
                <label>
                    Email: <br /> <br />
                    <input type="email"
                        placeholder="Enter your email here!"
                    />
                </label>
                <label>
                    Password: <br /> <br />
                    <input type="password"
                        placeholder="Enter your password here!"
                    />
                </label>

                <div>
                    Already have an account? <a href="">Sign up</a>
                </div>
            </div>
        </div>
    );
}

export default Login;


