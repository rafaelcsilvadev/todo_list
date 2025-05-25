import { useEffect, useState, type ReactNode } from "react";
import Nav from "../../components/nav/nav";
import type { TodoListEntity } from "../../../domain/entities/todo_list_entity";
import Task from "../../components/task/task";
import style from "./todo_list.module.css";
import Button from "../../components/button/button";
import FormModal from "../../components/form_modal/form_modal";
import { useTodoList } from "../../contexts/todo_list_context";

function TodoListPage(): ReactNode {
    const [openFormModal, setOpenFormModal] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const context = useTodoList();
    const [data, setData] = useState<TodoListEntity>({
        id: 0,
        title: "",
        description: "",
        completed: false,
        createdAt: new Date(),
    });
    const [todoList, setTodoList] = useState<TodoListEntity[]>([]);

    useEffect(() => {
        setTodoList(context.getAll());
    }, []);

    return (
        <>
            <Nav title="Todo List" />
            {
                openFormModal ?
                    <FormModal
                        isCreate={isCreate}
                        value1={data.title}
                        value2={data.description}
                        onChange1={(value) => {
                            setData({
                                ...data,
                                title: value.target.value
                            });
                        }}
                        onChange2={(value) => {
                            setData({
                                ...data,
                                description: value.target.value
                            });
                        }}
                        onSubmit={() => {
                            if (isCreate) {
                                context.create({ ...data });
                            } else {
                                context.update(data.id, { ...data });
                            }
                            setTodoList(context.getAll());
                        }}
                        onCancel={() => {
                            setOpenFormModal(false);                            
                        }}
                    />
                    : null
            }
            <main className={style.main}>
                {todoList.map((todo) => (
                    <>
                        <br />
                        <Task
                            key={todo.id}
                            id={todo.id.toString()} description={todo.description}
                            label={todo.title}
                            checked={todo.completed}
                            name={todo.title}
                            value={todo.title}
                            onChange={() => {
                                context.update(todo.id, {
                                    ...todo,
                                    completed: !todo.completed
                                });
                            }}
                            onDelete={() => {
                                context.delete(todo.id);
                                setTodoList(context.getAll());
                            }}
                            onUpdate={() => {
                                setOpenFormModal(true);
                                setIsCreate(false);
                                setData({
                                    id: todo.id,
                                    title: todo.title,
                                    description: todo.description,
                                    completed: todo.completed,
                                    createdAt: todo.createdAt
                                });

                            }}
                        />
                    </>

                ))}
                <div className={style.buttonBox}>
                    <Button label="New Task"
                        onClick={() => {
                            setOpenFormModal(true);
                            setIsCreate(true);
                        }}
                    />
                </div>
            </main>
        </>
    )
}

export default TodoListPage;