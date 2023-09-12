import { FaTimes } from 'react-icons/fa';
import Card from "./Card";

interface DataList {
    id: number;
    text: string;
}

interface TodoItemProps {
  item: DataList;
}

function TodoItem({ item }: TodoItemProps) {

  const handleClick = (id: number) => {
    console.log(id);
    
  }

  return (
    <>
      <Card>
        <button onClick={() => handleClick(item.id)} className='close'>
          <FaTimes color='white' />
        </button>
        <div>{item.text}</div>
      </Card>
    </>
  );
}

export default TodoItem;
