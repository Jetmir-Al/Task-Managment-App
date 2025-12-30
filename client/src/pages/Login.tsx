import { useState } from "react";

const Login = () => {
    const [name, setName] = useState<string>();
    return (
        <div className="login-Container">
            <div className="loginForm">
                <h3>Login</h3>
                <label>
                    Username:
                    <input type="text" />
                </label>
            </div>
        </div>
    );
}

export default Login;


