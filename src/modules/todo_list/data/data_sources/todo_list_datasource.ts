import { TODOS } from "../../../../core/constants/storage_keys";

export interface TodoListDataSource {
    getTodoList(): string | null;
    setData(todoList: string): void;
}

export const todoListDataSourceImpl = (): TodoListDataSource => {
    return {
        getTodoList: () => {
            return localStorage.getItem(TODOS);
        },
        setData(todoList) {
            localStorage.setItem(TODOS, todoList);
        },
    }
}