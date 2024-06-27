import { ReactNode } from "react";

const Button = ({
    disabled,
    children,
    onClick
}: {
    disabled: boolean,
    children: ReactNode,
    onClick: () => void
}) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: disabled ? "red" : "blue" }}
        >
            {children}
        </button>
    )
}
export default Button;