import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

export interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}

interface ITodoItemProps extends ITodoItem {
  toggleTodo: (todoId: number) => void;
}

const TodoItem = ({ id, completed, text, toggleTodo }: ITodoItemProps) => {
  return (
    <div className="rounded-md border p-4">
      <div className="flex justify-between">
        <div className="flex items-center space-x-2 ">
          <Checkbox id={`todo-${id}`} checked={completed} onClick={() => toggleTodo(id)} />
          <label
            htmlFor={`todo-${id}`}
            className={`text-sm cursor-pointer font-medium leading-none ${
              completed ? "line-through opacity-70 text-gray-400" : ""
            }`}>
            {text}
          </label>
        </div>
        <Button variant="ghost">
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
