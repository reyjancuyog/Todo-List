import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Button } from "antd";
import React from "react";

function TodoListTable({ NewTask }) {
  return (
    <div className="flex justify-center">
      <li className=" flex justify-center">
        <span className="mr-1 ">{NewTask}</span>
        <div className=" flex justify-center m-auto">
          <MdEditSquare />
          <MdDelete />
        </div>
      </li>
    </div>
  );
}

export default TodoListTable;
