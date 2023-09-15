import { createContext, useState } from "react";
import TodoData from "../data/TodoData";

interface DataList {
  id: number;
  text: string;
}

const TodoContext = createContext<any>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {

  // get the hardcoded data
  const [listdata, setListData] = useState<DataList[]>(TodoData);

  // object for getting the edit state
  const [itemEdit, setItemEdit] = useState({
    item: {},
    edit: false,
  })

  //update item in input field
  const editItem = (item: any) => {
    setItemEdit({
      item,
      edit: true,
    })
  }

  // delete item
  const deleteItem = (id: number) => {
    if(window.confirm('Delete?')) {
        setListData(listdata.filter((item) => item.id !== id))
    }
  }

  // add item
  const addItem = (newItem: DataList) => {
    newItem.id = listdata.length + 1;
    setListData([newItem, ...listdata])
  }

  //update the data
  const updateItem = (id: number, updItem: any) => {
    // console.log(id, updItem);
    setListData(
      listdata.map((item) => (item.id === id ? {...item, ...updItem} : item))
    )
  }

  return (
    <TodoContext.Provider
      value={{
        listdata,
        deleteItem,
        addItem,
        editItem,
        itemEdit,
        updateItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
