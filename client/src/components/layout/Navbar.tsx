import "./navbar.css";
import Button from "../ui/Button";
import { useToggleLightDark } from "../../hooks/ToggleMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faUser, faUserGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";
import Signup from "./Signup";
import { useAccountToggle } from "../../hooks/ToggleAccount";
import { Activity } from "react";
import { useAuthHook } from "../../hooks/AuthHook";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const { mode, toggleMode } = useToggleLightDark();
    const { toggleAccount, toggleAcc, loginSignup } = useAccountToggle();
    const { authenticated } = useAuthHook();
    const navigate = useNavigate();

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
                    {
                        authenticated ?
                            <Button
                                type={"button"}
                                onClick={() => navigate("/profile")}
                                className={"navBtn"}>
                                <FontAwesomeIcon icon={faUserGear} />
                            </Button>
                            :
                            <Button
                                type={"button"}
                                onClick={toggleAcc}
                                className={"navBtn"}
                            >
                                <FontAwesomeIcon
                                    className="icons"
                                    icon={faUser} />
                            </Button>
                    }

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
            <Activity mode={toggleAccount ? "visible" : "hidden"}>
                {
                    loginSignup ?
                        <Signup />
                        :
                        <Login />
                }
            </Activity>

        </>
    );
}

export default Navbar;