import { Button, Card, Input, Layout } from "antd";
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
    <Layout className=" min-h-screen bg-gradient-to-b from-blue-950 to-green-500 overflow-hidden">
      <h1 className=" text-zinc-400 text-2xl ml-2">Todo Task</h1>
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
        <div className=" mt-2 flex justify-center">
          <Card style={{ width: 200 }}>
            <ul>
              {todList.map((NewTask) => {
                return <TodoListTable NewTask={NewTask} />;
              })}
            </ul>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default TodoLayout;
