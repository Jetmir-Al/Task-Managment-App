import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Button from '../components/ui/Button';

interface IError {
    title: string | 'An error occurred',
    details: string | "No details yet",
    onRetry: () => void | null,
    onClose: () => void | null
}

export default function Error({ title, details, onRetry }: IError) {
    const [showDetails, setShowDetails] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="error-Container">
            <div className="error">
                <FontAwesomeIcon className="errorIcon"
                    icon={faTriangleExclamation} />


                <div className="errorInfo">
                    <div className="errorTitle">{title}</div>
                </div>
            </div>

            {details && (
                <div className="errorDetails">
                    <button
                        type="button"
                        onClick={() => setShowDetails((s) => !s)}>
                        {showDetails ? 'Hide details' : 'Show details'}
                    </button>

                    {showDetails && (
                        <p className="errorDetailsText">
                            {details}
                        </p>
                    )}
                </div>
            )}
            <div className='error-btns'>
                <Button
                    onClick={onRetry}
                    className={null}
                    type={'button'}
                >
                    Retry
                </Button>
                <Button
                    onClick={() => navigate('/')}
                    className={null}
                    type={'button'}
                >
                    Close
                </Button>
            </div>
        </div>
    );
}

