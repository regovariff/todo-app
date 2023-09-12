import TodoItem from "./TodoItem";

interface DataList {
  id: number;
  text: string;
}

interface TodoListProps {
  listdata: DataList[];
}

function TodoList({ listdata }: TodoListProps) {
  if (!listdata || listdata.length === 0) {
    return <p>Nothing here yet</p>;
  }

  return (
    <>
      <h1>To Do List</h1>
      <div>
        {listdata.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default TodoList;
