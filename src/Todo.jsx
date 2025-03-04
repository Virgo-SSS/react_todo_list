import { CheckIcon, StopIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Todo({ todo, setTodo }) {

    const handleDeleteTodo = () => {
        setTodo((prevData) => {
            return prevData.filter(item => item.name !== todo.name);
        })
    }

    const handleTodoCompleted = () => {
        if(!todo.status) {
            setTodo(
                (prevTodos) => {
                    return prevTodos.map((t) => 
                        t.name == todo.name ? {...t, status:true} : t
                    )
                }
            )
        }
    }

    return (
        <>
            <div className="flex item-center my-3 gap-2">
                <div onClick={handleTodoCompleted} className="flex flex-1 item-center cursor-pointer">
                    {todo.status ? <CheckIcon className="w-7" /> : <StopIcon className="w-7" />}
                    <p className="text-slate-700 ml-4 text-[17px]">{todo.name}</p>
                </div>
                <TrashIcon className="w-3.5 cursor-pointer" onClick={handleDeleteTodo} />
            </div>
        </>
    )
}