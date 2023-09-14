import { createContext, useState } from "react";
import TodoData from "../data/TodoData";

const TodoContext = createContext<any>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  interface DataList {
    id: number;
    text: string;
  }

  const [listdata, setListData] = useState<DataList[]>(TodoData);

  const [itemEdit, setItemEdit] = useState({
    item: {},
    edit: false,
  })

  const deleteItem = (id: number) => {
    if(window.confirm('Delete?')) {
        setListData(listdata.filter((item) => item.id !== id))
    }
  }

  const addItem = (newItem: DataList) => {
    newItem.id = listdata.length + 1;
    setListData([newItem, ...listdata])
  }

  //update item in input field
  const editItem = (item: any) => {
    setItemEdit({
      item,
      edit: true,
    })
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
