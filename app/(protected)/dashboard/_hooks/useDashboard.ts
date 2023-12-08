import { useState } from "react";
import initialTodosData from "@/db/todos.json";
import initialSalesData from "@/db/sales.json";

export default function useDashboard() {
  const [todos, setTodos] = useState(initialTodosData);
  const [salesChart] = useState(initialSalesData);
  const handleToggleTodo = (todoId: number) => {
    setTodos((prev) => {
      const updatedTodos = prev.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return updatedTodos;
    });
  };

  return {
    todos,
    handleToggleTodo,
    salesChart,
  };
}
