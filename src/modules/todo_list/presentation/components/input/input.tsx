import type { ReactNode } from "react";
import style from "./input.module.css";

type InputType = Exclude<React.HTMLInputTypeAttribute, "radio" | "checkbox" | "color">;

interface InputProps {
    readonly id: string;
    readonly type: InputType;
    readonly label: string;
    readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly value?: string;

}

function Input({ ...props }: InputProps): ReactNode {
    return (
        <div className={style.inputBox}>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} type={props.type} onChange={(event) => props.onChange(event)} value={props.value} />
        </div>
    );
}

export default Input;