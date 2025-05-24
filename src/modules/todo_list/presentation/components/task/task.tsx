import type { ReactNode } from "react";
import style from "./task.module.css";

interface TaskProps {
    readonly id?: string;
    readonly name?: string;
    readonly value?: string;
    readonly label?: string;
    readonly description?: string;
}


function Task({ ...props }: TaskProps): ReactNode {
    return (
        <div className={style.checkBox}>
            <input id={props.id} type="checkbox" name={props.name} value={props.value} />
            <div>
                <label htmlFor={props.id}>{props.label}</label>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    );
}

export default Task;