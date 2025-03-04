import { useRef, useState } from "react";

export default function TodoList() {
    let [todos, setTodo] = useState([])
    let [tempTodo, setTempTodo] = useState("")
    let clearInput = useRef(null);

    const handleAdd = (e) => {
        console.log(e.target.value);
        setTodo([...todos, tempTodo]);
        clearInput.current.clear()
    }

    return (
        <>
            <div className="card">
                <h1>Todo List</h1>
                <input ref={clearInput} type="text" name="name" onChange={(e) => setTempTodo(e.target.value)} />
                <button onClick={handleAdd}>Add</button>
                {todos.map((todo) => {
                    return <p key={todo}>{todo}</p>
                })}
            </div>
        </>
    )
}