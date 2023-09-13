import TodoItem from "./TodoItem";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

interface DataList {
  id: number;
  text: string;
}

function TodoList() {
  const {listdata} = useContext(TodoContext);

  if (!listdata || listdata.length === 0) {
    return <p>Nothing here yet</p>;
  }

  return (
    <>
      <div>
        {listdata.map((item: DataList) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default TodoList;
