import { FaTimes, FaEdit } from 'react-icons/fa';
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

  const {deleteItem, editItem} = useContext(TodoContext);

  return (
    <>
      <Card>
      <button onClick={() => editItem(item)} className='edit'>
          <FaEdit color='white' />
        </button>
        <button onClick={() => deleteItem(item.id)} className='close'>
          <FaTimes color='white' />
        </button>
        <div>{item.text}</div>
      </Card>
    </>
  );
}

export default TodoItem;
