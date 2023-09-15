import Button from "./Button";
import Card from "./Card";
import { useContext, useState, useEffect } from "react";
import TodoContext from "../context/TodoContext";

function TodoAdd({answer}:any) {
  const [text, setText] = useState("");

  const { addItem, itemEdit, updateItem } = useContext(TodoContext);

  // edit the note
  useEffect(() => {
    if(itemEdit.edit === true){
      setText(answer)
    }
  }, [itemEdit])

  // when submit, the button will decide edit or add based on itemedit.edit boolean
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      text,
    };

    if(itemEdit.edit === true) {
      updateItem(itemEdit.item.id, newItem)
    } else {
      addItem(newItem)
    }

    setText("");
  };

  // get the value of the input
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
