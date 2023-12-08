import React from "react";
import TodoItem, { ITodoItem } from "./TodoItem";

interface ITodoListProps {
  todos: ITodoItem[];
  toggleTodo: (todoId: number) => void;
}

const TodoList = ({ todos, toggleTodo: toggleTodo }: ITodoListProps) => {
  return (
    <div className="px-4">
      <ul className="grid gap-4">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              toggleTodo={(todoId) => toggleTodo(todoId)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
