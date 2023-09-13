import { useState } from "react";
import TodoList from "../components/TodoList";
import TodoData from "../data/TodoData";
import TodoAdd from "../components/TodoAdd";
import Button from "../components/Button";

function TodoPage() {

  const addNote = () => {
    console.log("add");
  };

  return (
    <>
      <div>
        <h1>To Do List</h1>
        <Button onClick={addNote}>Add Note</Button>
      </div>
      <div>
        <TodoAdd />
        <TodoList />
      </div>
    </>
  );
}

export default TodoPage;
