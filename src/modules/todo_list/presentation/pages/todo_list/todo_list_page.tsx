import type { ReactNode } from "react";
import Button from "../../components/button/button";

function TodoListPage(): ReactNode {
    return (
        <Button label="Send" onClick={() => alert('Teste')} disabled={true}/>
    )
}

export default TodoListPage;