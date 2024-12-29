import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface IButtonProps {
    children: ReactNode,
    onClick: () => void,
    action?: 'decrement' | 'increment'
}

export const Button = ({ children, onClick, action }: IButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`
                ${styles.button} 
                ${action === 'increment' ? styles.button_increment : ""}
                ${action === 'decrement' ? styles.button_decrement : ""}
                `}
        >
            {children}
        </button>
    )
}
