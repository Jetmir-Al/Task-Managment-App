export interface IButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
    type?: 'submit' | 'reset' | 'button',
    className: string
}