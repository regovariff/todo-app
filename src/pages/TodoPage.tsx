import { useState } from 'react';
import TodoList from '../components/TodoList';
import TodoData from "../data/TodoData";

function TodoPage() {
    interface DataList {
        id: number;
        text: string;
    }

    const [listdata, setListData] = useState<DataList[]>(TodoData);

    return (
        <>
            <div>
                <TodoList />
            </div>
        </>
    );
}

export default TodoPage;