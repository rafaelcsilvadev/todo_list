import type { TodoListEntity } from "../../domain/entities/todo_list_entity";

export const fromJson = (json: string): TodoListEntity => { 
    const data = JSON.parse(json);
    return {
        id: data.id,
        title: data.title,
        description: data.description,
        completed: data.completed,
        createdAt: new Date(data.createdAt),
    };
};

export const toJson = (todo: TodoListEntity): string => { 
    return JSON.stringify({
        id: todo.id,
        title: todo.title,
        description: todo.description,
        completed: todo.completed,
        createdAt: todo.createdAt.toISOString(),
    });
};