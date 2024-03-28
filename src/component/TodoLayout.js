import { Button, theme, Input, Layout } from "antd";
import React from "react";
import { useState } from "react";
import TodoListTable from "./TodoListTable";
import { Header } from "antd/es/layout/layout";

function TodoLayout() {
  const [userInput, setUserInput] = useState("");
  const [todList, setTodoList] = useState([]);
  const {
    token: { colorPrimaryBg },
  } = theme.useToken();

  //add todo
  const addTodos = () => {
    const Task = {
      id: todList.length === 0 ? 1 : todList[todList.length - 1].id + 1,
      TaskName: userInput,
    };
    setTodoList([...todList, Task]);
  };
  //user input
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <Layout className=" min-h-screen bg-blue-200">
      <div className=" w-full h-12 bg-blue-400  m-0 shadow-md flex flex-row gap-1">
        <img src="date.svg" width={40} className=" ml-1" />
        <h1
          className=" text-blue-900 font text-2xl tracking-wider font-mono mt-2"
          style={{ fontWeight: 900, height: 800 }}
        >
          Todo/Task
        </h1>
      </div>
      <div className=" flex-col">
        <div className="flex justify-center mt-2 gap-2">
          <Input
            style={{ width: 120, height: 25 }}
            placeholder="Enter Todo"
            onChange={handleUserInput}
            className=" shadow-sm"
            required
          />
          <Button
            className=" shadow-sm font-mono font-semibold"
            size="small"
            onClick={addTodos}
            style={{ backgroundColor: colorPrimaryBg, color: "#1e3a8a" }}
          >
            Add Task
          </Button>
        </div>
        <div className=" mt-2 flex justify-center">
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
