import {  ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
    let [todos, setTodo] = useState([])
    let [tempTodo, setTempTodo] = useState("")
    let clearInput = useRef(null);

    const handleAdd = () => {
        if(todos.find(todo => todo.name === tempTodo)) {
            alert("Todo already exists");
        } 

        if(tempTodo == "") {
            alert("Please fill the input to add todo");
        }
        
        if(!todos.find(todo => todo.name === tempTodo) && tempTodo != "") {
            setTodo([...todos, {
                name: tempTodo,
                status: false
            }]);
        }

        clearInput.current.focus();
        setTempTodo("");
    }

    return (
        <>
            <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
                <div className="flex item-center mt-7 gap-2">
                    <ClipboardDocumentListIcon className="w-8" />
                    <h1 className="text-3xl font-semibold">
                        Todolist
                    </h1>
                </div>

                <div className="flex item-center my-7 bg-gray-200 rounded-full">
                    <input 
                        type="text" 
                        className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" 
                        placeholder="Add your task"
                        onChange={(e) => setTempTodo(e.target.value)}
                        ref={clearInput}
                        value={tempTodo}
                    />
                    <button 
                        className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
                        onClick={handleAdd}
                    >
                        Add +
                    </button>
                </div>

                {
                    todos &&
                    todos.map((todo, index) => {
                        return <Todo todo={todo} setTodo={setTodo} key={index} />
                    })
                }
            </div>
        </>
    )
}