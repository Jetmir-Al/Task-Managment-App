
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import "./utils.css";

function NoInfo(
    { noInfo }:
        { noInfo: string | "There is no information here yet!" }
) {
    return (
        <div className="noInfo-container">
            <FontAwesomeIcon
                icon={faCircleQuestion}
                className="noInfoIcon" />
            <h3>{noInfo}</h3>
        </div>
    );
}

export default NoInfo;