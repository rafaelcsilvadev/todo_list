import type { TodoListEntity } from "../entities/todo_list_entity";

export interface TodoListRepository { 
    getAll(): TodoListEntity[] | never[];
    getById(id: number): TodoListEntity | null | never[];
    create(todo: TodoListEntity): TodoListEntity;
    update(id: number, todo: TodoListEntity): TodoListEntity | null;
    delete(id: number): void;
}