import TodoList from "../components/TodoList";
import TodoAdd from "../components/TodoAdd";
import Button from "../components/Button";
import { useState } from "react";

function TodoPage() {
  const [isVisible, setIsVisible] = useState(false);

  const addNote = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div>
        <h1>To Do List</h1>
        <Button onClick={addNote}>{isVisible ? "Hide" : "Add Note"}</Button>
      </div>
      <div>
        {isVisible && <TodoAdd />}
        <TodoList />
      </div>
    </>
  );
}

export default TodoPage;
