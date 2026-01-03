import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";
import { useAccountToggle } from "../../hooks/ToggleAccount";

function Signup() {
    const { toggleLoginSignup, toggleAcc } = useAccountToggle();

    return (
        <div className="login-container">
            <div className="loginForm">
                <h3>Signup</h3>
                <label>
                    Name: <br /> <br />
                    <input type="text"
                        placeholder="Enter your name here!"
                        required
                    />
                </label>
                <label>
                    Email: <br /> <br />
                    <input type="email"
                        placeholder="Enter your email here!"
                        required
                    />
                </label>
                <label>
                    Password: <br /> <br />
                    <input type="password"
                        placeholder="Enter your password here!"
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
                    Already have an account? <Button
                        type={"button"}
                        className={"loginSignup-btn"}
                        onClick={toggleLoginSignup}
                    >Login</Button>
                </div>
            </div>
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