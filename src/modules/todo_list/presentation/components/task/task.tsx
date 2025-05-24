import type { ReactNode } from "react";
import style from "./task.module.css";
import Button from "../button/button";

interface TaskProps {
    readonly id?: string;
    readonly name?: string;
    readonly value?: string;
    readonly label?: string;
    readonly description?: string;
    readonly checked?: boolean;
    readonly onDelete?: () => void;
}


function Task({ ...props }: TaskProps): ReactNode {
    return (
        <div className={style.checkBox}>
            <input id={props.id} type="checkbox" name={props.name} value={props.value} checked={props.checked} />
            <div className="inside">
                <div className="descriptions">
                    <label htmlFor={props.id}>{props.label}</label>
                    <span>
                        {props.description}
                    </span>
                </div>
                <div className="buttons">
                    <Button label="Delete" onClick={() => { }} />
                    <div />
                    <Button label="Update" onClick={() => { }} />
                </div>
            </div>
        </div>
    );
}

export default Task;