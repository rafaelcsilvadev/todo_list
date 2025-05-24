import style from "./input.module.css";

type InputType = Exclude<React.HTMLInputTypeAttribute, "radio" | "checkbox" | "color">;

interface InputProps {
    readonly id: string;
    readonly type: InputType;
    readonly label: string;
}

function Input({ id, type, label }: InputProps) {
    return (
        <div className={style.inputBox}>
            <label htmlFor={id}>{label}</label><br />
            <input id={id} type={type} />
        </div>
    );
}

export default Input;