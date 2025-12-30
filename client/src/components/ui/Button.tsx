import "./button.css";
import type { IButtonProps } from "../../types/IButton";


function Button({ children, onClick, type, className }: IButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    );
}

export default Button;