import type { ReactNode } from "react";
import style from "./input.module.css";

type InputType = Exclude<React.HTMLInputTypeAttribute, "radio" | "checkbox" | "color">;

interface InputProps {
    readonly id: string;
    readonly type: InputType;
    readonly label: string;
    readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

function Input({ id, type, label, onChange }: InputProps): ReactNode {
    return (
        <div className={style.inputBox}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} onChange={onChange} />
        </div>
    );
}

export default Input;