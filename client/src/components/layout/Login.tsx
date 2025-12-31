// import { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";
import { useAccountToggle } from "../../hooks/ToggleAccount";

const Login = () => {
    const { toggleLoginSignup, toggleAcc } = useAccountToggle();
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
                    Dont have an account? <Button
                        type={"button"}
                        className={"loginSignup-btn"}
                        onClick={toggleLoginSignup}
                    >Sign up</Button>
                </div>
            </div>
            <Button
                type={"button"}
                onClick={toggleAcc}
                className={"x-btn"}

            >
                <FontAwesomeIcon icon={faX} />
            </Button>
        </div>
    );
}

export default Login;


