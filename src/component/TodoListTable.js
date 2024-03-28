import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import React, { useState } from "react";

function TodoListTable({ NewTask }) {
  // const Delete = (id) => {
  //   const newTodo = NewTask.filter((todo) => {
  //     return todo.id !== id;
  //     setHandleDelete(newTodo);
  //   });
  // };
  return (
    <div className="flex justify-center">
      <li className=" flex justify-center">
        <span className="mr-1">{NewTask.TaskName}</span>
        <div className=" flex justify-center m-auto gap-1">
          <MdEditSquare className="drop-shadow-xl hover:bg-blue-400 cursor-pointer" />
          <MdDelete class=" shadow-2xl hover:bg-blue-400 cursor-pointer" />
        </div>
      </li>
    </div>
  );
}

export default TodoListTable;
