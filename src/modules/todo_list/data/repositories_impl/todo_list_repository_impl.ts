import type { TodoListEntity } from "../../domain/entities/todo_list_entity";
import type { TodoListRepository } from "../../domain/repositories/todo_list_repository";
import type { TodoListDataSource } from "../data_sources/todo_list_datasource";

export const TodoListRepositoryImpl = (dataSource: TodoListDataSource): TodoListRepository => {
    return {
        getAll: () => {
            const storage = dataSource.getTodoList();
            if (storage) {
     
                const todos = [...JSON.parse(storage)];
            
                return todos;
            }

            return [];
        },
        getById: (id: number) => {
            const storage = dataSource.getTodoList();
            if (storage) {
                const todos = [...JSON.parse(storage)];

                return todos.find((todo) => todo.id === id);
            }

            return [];
        },
        create: (todo) => {
            const storage = dataSource.getTodoList();
            let todos: TodoListEntity[] = [];

            if (storage) {
                todos = [...JSON.parse(storage)];
            }

            const newTodo = {
                ...todo,
                id: todos.length + 1,
                createdAt: new Date(),
            };
            todos.push(newTodo);
            dataSource.setData(JSON.stringify(todos));

            return todo;
        },
        update: (id: number, todo) => {
            const storage = dataSource.getTodoList();
            if (storage) {
                const todos = [...JSON.parse(storage)];

                const index = todos.findIndex((todo) => todo.id === id);
                if (index !== -1) {
                    todos[index] = { ...todos[index], ...todo };
                    dataSource.setData(JSON.stringify(todos));
                    return todos[index];
                }
            }            

            return null;
        },
        delete: (id: number) => {
            const storage = dataSource.getTodoList();
            if (storage) {
                const todos = [...JSON.parse(storage)];

                const index = todos.findIndex((todo) => todo.id === id);
                if (index !== -1) {
                    todos.splice(index, 1);
                    dataSource.setData(JSON.stringify(todos));
                }
            }
        }
    }
}
