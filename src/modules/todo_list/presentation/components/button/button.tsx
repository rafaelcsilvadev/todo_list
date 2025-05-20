import type { ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps {
    readonly onClick: () => void;
    readonly label: string;
    readonly disabled?: boolean;
}


function Button({ onClick, label, disabled = false }: ButtonProps): ReactNode {
    return (
        <button disabled={disabled} className={`${styles.button} ${disabled ? styles.buttonDisabled : styles.buttonEnabled}`} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;