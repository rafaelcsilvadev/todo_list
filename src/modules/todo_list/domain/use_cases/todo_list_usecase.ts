import type { TodoListEntity } from "../entities/todo_list_entity";
import type { TodoListRepository } from "../repositories/todo_list_repository";

export interface TudoListUseCase {
    getAll(): TodoListEntity[] | never[];
    getById(id: number): TodoListEntity | null | never[];
    create(todo: TodoListEntity): TodoListEntity;
    update(id: number, todo: TodoListEntity): TodoListEntity | null;
    delete(id: number): void;
}

export const todoListUseCase = (repository: TodoListRepository): TudoListUseCase => {
    return {
            getAll: () => {
                return repository.getAll();
            },
            getById: (id: number) => {
                return repository.getById(id);
            },
            create: (todo) => {
                return repository.create(todo);
            },
            update: (id: number, todo) => {
                return repository.update(id, todo);
            },
            delete: (id: number) => {
                return repository.delete(id);
            }
        }
}