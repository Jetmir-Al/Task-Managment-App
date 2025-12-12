import "./navbar.css";
import Button from "../ui/Button";
import { useToggleLightDark } from "../../hooks/ToggleMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faUser, faHouse } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const { mode, toggleMode } = useToggleLightDark();
    return (
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
                    onClick={() => console.log("Halo")}
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
    );
}

export default Navbar;