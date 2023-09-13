import { useState } from "react";
import TodoList from "../components/TodoList";
import TodoData from "../data/TodoData";
import Button from "../components/Button";

function TodoPage() {
  interface DataList {
    id: number;
    text: string;
  }

  const [listdata, setListData] = useState<DataList[]>(TodoData);

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
        <TodoList />
      </div>
    </>
  );
}

export default TodoPage;
