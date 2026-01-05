import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";
import { useAccountToggle } from "../../hooks/ToggleAccount";
import { useState } from "react";
import { singup } from "../../api/auth.api";

function Signup() {
    const { toggleLoginSignup, toggleAcc } = useAccountToggle();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [badEmail, setBadEmail] = useState<boolean>(false);
    const [badInfo, setBadInfo] = useState<boolean>(false);


    const handleSignupForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const regex = /.*\.com$/;
        if (!regex.test(email)) {
            setBadEmail(true);
        } else {
            try {
                await singup(name, email, password);
                toggleLoginSignup();
            } catch {
                setBadInfo(true);
            }
        }
    }

    return (
        <div className="login-container">
            <form className="loginForm" onSubmit={handleSignupForm}>
                <h3>Signup</h3>
                {
                    badInfo &&
                    <p>Try a diffrent email or password!</p>
                }
                <label>
                    Name: <br /> <br />
                    <input type="text"
                        placeholder="Enter your name here!"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Email: <br /> <br />
                    <input type="email"
                        placeholder="Enter your email here!"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password: <br /> <br />
                    <input type="password"
                        placeholder="Enter your password here!"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {
                    badEmail &&
                    <p>Emails should end with .com!</p>
                }
                <Button
                    type={"submit"}
                    className={"submitForm-btn"}
                >
                    Submit
                </Button>
                <div>
                    Already have an account? <Button
                        type={"button"}
                        className={"loginSignup-btn"}
                        onClick={toggleLoginSignup}
                    >Login</Button>
                </div>
            </form>
            <Button
                type={"button"}
                className={"x-btn"}
                onClick={toggleAcc}

            >
                <FontAwesomeIcon icon={faX} />
            </Button>
        </div>
    )
}

export default Signup;