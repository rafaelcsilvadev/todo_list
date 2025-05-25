import Button from "../button/button";
import Input from "../input/input";
import style from "./form_modal.module.css";

interface FormModalProps {
    readonly onSubmit: () => void;
    readonly onCancel: () => void;
    readonly value1: string;
    readonly value2: string;
    readonly onChange1: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly onChange2: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly isCreate: boolean;
}

function FormModal({ ...props }: FormModalProps): React.ReactElement {
    let title: string =
    props.isCreate ? 'Create' : 'Update';
    
    return (
        <div className={style.formBox}>
            <div className={style.form}>
                <h2>{title} Task</h2>
                <Input id="0" label="Title" type="text" onChange={props.onChange1} value={props.value1} />
                <Input id="1" label="Description" type="text" onChange={props.onChange2} value={props.value2} />
                <div className={style.buttonBox}>
                    <Button label={'Cancelar'} onClick={props.onCancel} />
                    <Button label={title} onClick={props.onSubmit} />
                </div>
            </div>
        </div>
    );
}

export default FormModal;