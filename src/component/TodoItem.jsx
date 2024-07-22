import React, { useState } from 'react'
import { UseTodo } from '../context/TodoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {UpdateTodo, DeleteTodo, ToggleComplete} = UseTodo()


  const editTodo = () => {
    UpdateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  const ToggleCompleted = () => {
    //console.log(todo.id);
    ToggleComplete(todo.id)
  }

  return (
      <div
          className={`flex border items-center h-14 border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#DCD6F7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer w-6 h-6"
              checked={todo.completed}
              onChange={ToggleCompleted}
          />
          <input
              type="text"
              className={`border cursor-pointer outline-none w-full text-lg bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-9 h-9 rounded-lg text-sm border border-black/10 justify-center items-center hover:scale-105 hover:focus:ring-1 bg-white  shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-9 h-9 rounded-lg text-sm border border-black/10 justify-center items-center bg-white hover:scale-105 hover:focus:ring-1 shrink-0"
              onClick={() => DeleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;