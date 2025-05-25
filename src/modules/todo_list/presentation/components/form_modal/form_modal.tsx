import Button from "../button/button";
import Input from "../input/input";
import style from "./form_modal.module.css";

interface FormModalProps {
    readonly onSubmit: () => void;
    readonly onChange1: () => void;
    readonly onChange2: () => void;
    readonly isCreate: boolean;
}

function FormModal({ onSubmit, onChange1, onChange2, isCreate = true }: FormModalProps): React.ReactElement {
    let title: string =
        isCreate ? 'Create' : 'Update';
    
    return (
        <div className={style.formBox}>
            <form>
                <h2>{title} Task</h2>
                <Input id="0" label="Title" type="text" onChange={onChange1} />
                <Input id="1" label="Description" type="text" onChange={onChange2} />
                <Button label={title} onClick={onSubmit} />
            </form>
        </div>
    );
}

export default FormModal;