import Button from "../components/ui/Button";
import "./pageStyles/notfound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="notFound-container">
            <h2>404 NOT FOUND!</h2>
            <Button
                type="button"
                className={"notFound-btn"}
                onClick={() => navigate("/")}
            >
                Go Home!
            </Button>
        </div>
    )
}

export default NotFound;