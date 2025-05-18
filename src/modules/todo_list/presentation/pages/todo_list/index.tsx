import { TodoListProvider } from "../../contexts/todo_list_context";
import TodoListPage from "./todo_list_page";

function IndexTodoListPage() {
    return (
        <TodoListProvider>
            <TodoListPage />
        </TodoListProvider>
    )
}

export default IndexTodoListPage;