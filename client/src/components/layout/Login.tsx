// import { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";
import { useAccountToggle } from "../../hooks/ToggleAccount";
import { useState } from "react";
import { login } from "../../api/auth.api";
import { useAuthHook } from "../../hooks/AuthHook";
import { useMutation } from "@tanstack/react-query";

const Login = () => {
    const { toggleLoginSignup, toggleAcc } = useAccountToggle();
    const { setUser, setAuth } = useAuthHook();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [badInfo, setBadInfo] = useState<boolean>(false);

    const { mutateAsync: LoginFunc } = useMutation({
        mutationFn: async () => {
            return await login(email, password);
        },
        onSuccess: (res) => {
            toggleAcc();
            setAuth(true);
            setUser(res?.userLogedIn);
        },
        onError: () => {
            setBadInfo(true);
        }
    })
    async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await LoginFunc();
    }

    return (
        <div className="login-container">
            <form className="loginForm" onSubmit={handleLogin}>
                <h3>Login</h3>
                {
                    badInfo &&
                    <p>Try a diffrent email or password!</p>
                }
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


