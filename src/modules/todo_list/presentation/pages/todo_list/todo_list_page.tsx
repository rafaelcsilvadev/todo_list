import type { ReactNode } from "react";
import Nav from "../../components/nav/nav";
import type { TodoListEntity } from "../../../domain/entities/todo_list_entity";
import Task from "../../components/task/task";
import style from "./todo_list.module.css";
import Button from "../../components/button/button";

const mock: TodoListEntity[] = [
    {
        id: 1,
        title: "Todo 1411111111111111111",
        description: "Description 1",
        completed: false,
        createdAt: new Date("2023-01-01"),
    },
    {
        id: 2,
        title: "Todo 2",
        description: "Description 2",
        completed: true,
        createdAt: new Date("2023-01-02"),
    },
]

function TodoListPage(): ReactNode {
    return (
        <>
            <Nav title="Todo List" />
            <main className={style.main}>
                {mock.map((todo) => (
                    <>
                        <br />
                        <Task
                            key={todo.id}
                            id={todo.id.toString()} description={todo.description}
                            label={todo.title}
                            checked={todo.completed}
                        />
                    </>

                ))}
                <div className={style.buttonBox}> 
                    <Button label="New Task"
                        onClick={() => { }} 
                        />
                </div>
            </main>
        </>
    )
}

export default TodoListPage;