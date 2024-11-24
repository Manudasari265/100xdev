// import React from "react"

interface TodoType {
    title: string;
    description: string;
    done: boolean;
}

interface TodoInput {
    todo: TodoType;
}

export default function Todo(todo : TodoType) {
    return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <h2>{todo.done}</h2>
    </div>
}