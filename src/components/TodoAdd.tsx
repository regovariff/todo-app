import Button from "./Button";
import Card from "./Card";
import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function TodoAdd() {
  const [text, setText] = useState("");

  const { addItem } = useContext(TodoContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      text,
    };

    addItem(newItem);

    setText("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Add note"
              value={text}
            />
          </div>
          <Button>Submit</Button>
        </form>
      </Card>
    </>
  );
}

export default TodoAdd;
