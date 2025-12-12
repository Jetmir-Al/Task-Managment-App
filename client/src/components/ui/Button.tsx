import "./button.css";
interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
    type?: 'submit' | 'reset' | 'button',
    className: string
}


function Button({ children, onClick, type, className }: ButtonProps) {
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