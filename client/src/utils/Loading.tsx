import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import './utils.css';

function Loading() {

    return (
        <div className="loading-Container">
            <FontAwesomeIcon icon={faSpinner}
                className="loadingIcon" />
        </div>
    );
}

export default Loading;