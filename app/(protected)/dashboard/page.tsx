"use client";
import { Overview } from "@/components/custom/Overview";
import TodoList from "@/components/custom/TodoList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import useDashboard from "./_hooks/useDashboard";

const Dashboard = () => {
  const { handleToggleTodo, todos, salesChart } = useDashboard();
  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-4">Dashboard</h2>
      <div className="grid gap-4 grid-cols-1  lg:grid-cols-7 mt-8">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Annual Sales 2023</CardTitle>
          </CardHeader>
          <CardContent className="pl-6">
            <Overview data={salesChart} />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>To-do&apos;s</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <TodoList todos={todos} toggleTodo={handleToggleTodo} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
