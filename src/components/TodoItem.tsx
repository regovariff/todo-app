import Card from "./Card";

interface DataList {
    id: number;
    text: string;
}

interface TodoItemProps {
  item: DataList;
}

function TodoItem({ item }: TodoItemProps) {
  return (
    <>
      <Card>
        <div>{item.text}</div>
      </Card>
    </>
  );
}

export default TodoItem;
