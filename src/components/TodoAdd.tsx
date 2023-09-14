import Button from "./Button";
import Card from "./Card";
import { useContext, useState, useEffect } from "react";
import TodoContext from "../context/TodoContext";

function TodoAdd() {
  const [text, setText] = useState("");

  const { addItem, itemEdit } = useContext(TodoContext);

  //edit
  // useEffect(() => {
  //   if(itemEdit.edit === true){
  //     setText(itemEdit.item.text)
  //   }
  // }, [itemEdit])

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
