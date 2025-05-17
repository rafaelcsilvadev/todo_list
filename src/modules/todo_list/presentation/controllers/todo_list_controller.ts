import type { TodoListEntity } from "../../domain/entities/todo_list_entity";
import type { TudoListUseCase } from "../../domain/use_cases/todo_list_usecase";

export interface TudoListController {
    getAll(): TodoListEntity[] | never[];
    getById(id: number): TodoListEntity | null | never[];
    create(todo: TodoListEntity): TodoListEntity;
    update(id: number, todo: TodoListEntity): TodoListEntity | null;
    delete(id: number): void;
}

export const todoListController = (useCase: TudoListUseCase): TudoListController => {
    return {
        getAll() {
            return useCase.getAll();
        },
        getById(id) {
            return useCase.getById(id);
        },
        create(todo) {
            return useCase.create(todo);
        },
        update(id, todo) {
            return useCase.update(id, todo);
        },
        delete(id) {
            return useCase.delete(id);
        },
    }
}