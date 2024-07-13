import { useState } from "react";
import { UseTodo } from "../context/TodoContext";


function TodoForm(){
    const [todo , setTodo] = useState("")
    const {AddTodo} = UseTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return 

        AddTodo({todo:todo , completed: false})   //We did not put  id:__ becz we are addinf=g it in further proccess
        setTodo("")
    }



    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
  }
export default TodoForm;