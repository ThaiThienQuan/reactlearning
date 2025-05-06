import {useState} from "react";

export default function TodoList() {
    const [todo, setTodo] = useState(['Learn React ', 'Build project'])
    const [newTodo, setNewTodo] = useState('')

    const removetodo = (i) => {
        const newtodos = todo.filter((_, it) => it !== i);
        setTodo(newtodos);
    }
    const addTodo = () => {
        if (newTodo.trim()){
            setTodo([...todo,newTodo.trim()])
            setNewTodo('');
        }
    }

    return (<>
        <div>
            <h1>Todo list</h1>
            <ul>
                {todo.map((todo,i) =>
                    (<li key={i}>{todo}
                        <button onClick={() =>
                            removetodo(i)}>remove
                        </button>
                    </li>))}

            </ul>
            <input type="text" value={newTodo}
                   onChange={(e) =>
                       setNewTodo(e.target.value)}/>
            <button onClick={addTodo}>Add todo</button>
        </div>
    </>)
}