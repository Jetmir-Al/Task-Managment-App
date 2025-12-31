import "./navbar.css";
import Button from "../ui/Button";
import { useToggleLightDark } from "../../hooks/ToggleMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faUser, faHouse } from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";
import Signup from "./Signup";
import { useAccountToggle } from "../../hooks/ToggleAccount";
import { AccountToggleProvider } from "../../context/AccountToggle";

const Navbar = () => {
    const { mode, toggleMode } = useToggleLightDark();
    const { toggleAccount, toggleAcc, loginSignup } = useAccountToggle();

    return (
        <>
            <div className="navbar-container">
                <div className="homeLinks">
                    <a href="/">
                        <FontAwesomeIcon
                            className="icons"
                            icon={faHouse}
                        />
                    </a>
                    <a href="/">
                        Home
                    </a>
                </div>

                <div className="account-links">
                    <Button
                        type={"button"}
                        onClick={toggleAcc}
                        className={"navBtn"}
                    >
                        <FontAwesomeIcon
                            className="icons"
                            icon={faUser} />
                    </Button>

                    <Button
                        type={"button"}
                        onClick={toggleMode}
                        className={"navBtn"}
                    >
                        {
                            mode ?
                                <FontAwesomeIcon
                                    className="icons"
                                    icon={faSun} />
                                : <FontAwesomeIcon icon={faMoon}
                                    className="icons"
                                />
                        }
                    </Button>
                </div>
            </div>
            {toggleAccount ?
                <AccountToggleProvider>
                    {
                        loginSignup ?
                            <Signup />
                            :
                            <Login />
                    }
                </AccountToggleProvider>
                : null
            }
        </>
    );
}

export default Navbar;