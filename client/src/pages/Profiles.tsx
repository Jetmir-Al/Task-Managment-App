import Button from "../components/ui/Button";
import "./pageStyles/profiles.css";

const Profiles = () => {
    return (
        <div className="profiles-container">
            <div className="profile-info">
                <h2>UserName</h2>
                <h3>Email: </h3>
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