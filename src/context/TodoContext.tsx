import { createContext, useState } from "react";

const TodoContext = createContext<any>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  interface DataList {
    id: number;
    text: string;
  }

  const [listdata, setListData] = useState<DataList[]>([
    {
      id: 1,
      text: "context",
    },
  ]);

  const deleteItem = (id: number) => {
    if(window.confirm('Delete?')) {
        setListData(listdata.filter((item) => item.id !== id))
    }
  }

  return (
    <TodoContext.Provider
      value={{
        listdata,
        deleteItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
