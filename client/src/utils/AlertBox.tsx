import "./utils.css";
import Button from "../components/ui/Button";
import { useState } from "react";

const AlertBox = () => {
    const [alert, setAlert] = useState<boolean>(true)
    return (
        <div className="alert-container"
            style={alert ? { display: "flex" } : { display: "none" }}>
            <div className="alert-box">

                <h2>Disclaimer!</h2>
                <p>This is strictly a portfolio website. <br /> Please do not enter any sensitive data in it!</p>
                <Button
                    className=""
                    type="button"
                    onClick={() => setAlert(!alert)}
                >
                    Close
                </Button>
            </div>
        </div>
    )

}

export default AlertBox;