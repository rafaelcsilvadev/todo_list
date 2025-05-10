import { TODOS } from "../../../../core/constants/storage_keys";
import type { TodoListEntity } from "../../domain/entities/todo_list_entity";
import type { TodoListRepository } from "../../domain/repositories/todo_list_repository";
import { fromJson } from "../models/todo_list_model";

export const todoListRepositoryImpl = (): TodoListRepository => { 
    return {
        getAll: () => {
            const storage = localStorage.getItem(TODOS);
            if (storage) {
                const todos = [...JSON.parse(storage)].map((todo: string) => fromJson(todo));
            
                return todos;
            }

            return [];
        },
        getById: (id: number) => {
            const storage = localStorage.getItem(TODOS);
            if (storage) {
                const todos = [...JSON.parse(storage)].map((todo: string) => fromJson(todo));

                return todos.find((todo) => todo.id === id) || null;
            }

            return [];
        },
        create: (todo) => {
            const storage = localStorage.getItem(TODOS);
            let todos: TodoListEntity[] = [];

            if (storage) {
                todos = [...JSON.parse(storage)].map((todo: string) => fromJson(todo));
            }

            const newTodo = {
                ...todo,
                id: todos.length + 1,
                createdAt: new Date(),
            };
            todos.push(newTodo);
            localStorage.setItem(TODOS, JSON.stringify(todos));

            return todo;
        },
        update: (id: number, todo) => {
            const storage = localStorage.getItem(TODOS);
            if (storage) {
                const todos = [...JSON.parse(storage)].map((todo: string) => fromJson(todo));

                const index = todos.findIndex((todo) => todo.id === id);
                if (index !== -1) {
                    todos[index] = { ...todos[index], ...todo };
                    localStorage.setItem(TODOS, JSON.stringify(todos));
                    return todos[index];
                }
            }            

            return null;
        },
        delete: (id: number) => {
            const storage = localStorage.getItem(TODOS);
            if (storage) {
                const todos = [...JSON.parse(storage)].map((todo: string) => fromJson(todo));

                const index = todos.findIndex((todo) => todo.id === id);
                if (index !== -1) {
                    todos.splice(index, 1);
                    localStorage.setItem(TODOS, JSON.stringify(todos));
                }
            }
        }
    }
}
