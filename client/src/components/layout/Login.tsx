// import { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";
import { useAccountToggle } from "../../hooks/ToggleAccount";
import { useState } from "react";
import { login } from "../../api/auth.api";

const Login = () => {
    const { toggleLoginSignup, toggleAcc } = useAccountToggle();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            await login(email, password);
        } catch (error: unknown) {
            console.log(error);
        }
    }

    return (
        <div className="login-container">
            <form className="loginForm" onSubmit={handleLogin}>
                <h3>Login</h3>
                <label>
                    Email: <br /> <br />
                    <input type="email"
                        placeholder="Enter your email here!"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password: <br /> <br />
                    <input type="password"
                        placeholder="Enter your password here!"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>

                <Button
                    type={"submit"}
                    className={"submitForm-btn"}
                >
                    Submit
                </Button>

                <div>
                    Dont have an account? <Button
                        type={"button"}
                        className={"loginSignup-btn"}
                        onClick={toggleLoginSignup}
                    >Sign up</Button>
                </div>
            </form>
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


