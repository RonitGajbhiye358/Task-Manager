import { useState } from "react";
import { UseTodo } from "../context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { AddTodo } = UseTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo)
      return alert("Input Field cannot be empty, please add TODO!");

    AddTodo({ todo: todo, completed: false }); //We did not put  id:__ becz we are addinf=g it in further proccess
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full h-12 border focus:ring-1 text-black text-lg border-black/10 rounded-l-lg px-3 outline-none duration-150  bg-white py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3  hover:scale-105 py-1 w-24 text-xl hover:bg-green-700 bg-green-600 cursor-pointer text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}
export default TodoForm;
