import { Button, Input, Layout } from "antd";
import React from "react";
import { useState } from "react";
import TodoListTable from "./TodoListTable";
function TodoLayout() {
  const [userInput, setUserInput] = useState("");
  const [todList, setTodoList] = useState([]);
  //add todo
  const addTodos = () => {
    setTodoList([...todList, userInput]);
  };
  //user input
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <Layout className=" min-h-screen bg-slate-500">
      <h1>Todo Task</h1>
      <div className=" flex-col">
        <div className="flex justify-center gap-1">
          <Input
            style={{ width: 120, height: 25 }}
            placeholder="Enter Todo"
            onChange={handleUserInput}
          />
          <Button size="small" onClick={addTodos}>
            Add Task
          </Button>
        </div>
        <div className=" mt-2">
          <ul>
            {todList.map((NewTask) => {
              return <TodoListTable NewTask={NewTask} />;
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default TodoLayout;
