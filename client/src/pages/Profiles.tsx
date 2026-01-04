import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth.api";
import Button from "../components/ui/Button";
import { useAuthHook } from "../hooks/AuthHook";
import "./pageStyles/profiles.css";

const Profiles = () => {

    const { user, setAuth, setUser } = useAuthHook();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout();
            setAuth(false);
            setUser(null);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="profiles-container">
            <div className="profile-info">
                <h2>{user?.name}</h2>
                <h3>{user?.email}</h3>
                <div>
                    <em>Tasks: 3</em>
                    <br />
                    <em>Completed: 2</em>
                </div>
                <div className="profile-btns">
                    <Button
                        onClick={() => console.log("yup")}
                        type={"button"}
                        className={""}
                    >
                        Update
                    </Button>
                    <Button
                        onClick={() => handleLogout()}
                        type={"button"}
                        className={""}
                    >
                        Log out
                    </Button>

                    <Button
                        onClick={() => console.log("yup")}
                        type={"button"}
                        className={""}
                    >
                        Delete
                    </Button>

                </div>
            </div>
        </div>
    );
}

export default Profiles