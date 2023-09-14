import TodoList from "../components/TodoList";
import TodoAdd from "../components/TodoAdd";
import Button from "../components/Button";
import { useState, useContext, useEffect } from "react";
import Navigation from "../components/Navigation";
import TodoContext from "../context/TodoContext";

function TodoPage() {
  const [isVisible, setIsVisible] = useState(false);

  const { itemEdit } = useContext(TodoContext);

  const [answer, setAnswer] = useState("");

  //edit
  useEffect(() => {
    if(itemEdit.edit === true){
      console.log(answer)
      setAnswer(itemEdit.item.text);
    }
  }, [itemEdit])

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
