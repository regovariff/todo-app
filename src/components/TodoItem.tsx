import { FaTimes } from 'react-icons/fa';
import Card from "./Card";

import { useContext } from "react";
import TodoContext from "../context/TodoContext";

interface DataList {
    id: number;
    text: string;
}

interface TodoItemProps {
  item: DataList;
}

function TodoItem({ item }: TodoItemProps) {

  const {deleteItem} = useContext(TodoContext);

  return (
    <>
      <Card>
        <button onClick={() => deleteItem(item.id)} className='close'>
          <FaTimes color='white' />
        </button>
        <div>{item.text}</div>
      </Card>
    </>
  );
}

export default TodoItem;
