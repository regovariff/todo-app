import TodoList from "../components/TodoList";
import TodoAdd from "../components/TodoAdd";
import Button from "../components/Button";
import { useState, useContext, useEffect } from "react";
import Navigation from "../components/Navigation";
import TodoContext from "../context/TodoContext";

function TodoPage() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { itemEdit } = useContext(TodoContext);

  const [answer, setAnswer] = useState("");

  //get the state of the click
  useEffect(() => {
    if(itemEdit.edit === true){
      setAnswer(itemEdit.item.text);
    }
  }, [itemEdit.item.id])

  const addNote = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="nav">
        <Navigation />
      </div>
      <div className="todopage">
        <h1>To Do List</h1>
        <Button onClick={addNote}>{isVisible ? "Hide" : "Add Note"}</Button>
      </div>
      <div>
        {isVisible && <TodoAdd answer={answer}/>}
        <TodoList />
      </div>
    </>
  );
}

export default TodoPage;
