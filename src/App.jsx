import { useState, useEffect } from 'react'
import './App.css'
import { TodoContextProvider } from './context/TodoContext'
import TodoForm from "./component/TodoForm"
import TodoItem from "./component/TodoItem"

function App() {
  const [todos, setTodos] = useState([])

  const AddTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const UpdateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))


  }

  const DeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const ToggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? {
          ...prevTodo,
          completed: !prevTodo.completed
        } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])




  return (
    <TodoContextProvider value={{ todos, AddTodo, UpdateTodo, DeleteTodo, ToggleComplete }}>
      <div className=" bg-[rgb(66,72,116)] min-h-screen  py-8">
        <div className="bg-[#A6B1E1] w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <div className="flex justify-around items-center mt-2 flex-col">
            <img src='/LOGO.png' width={"112px"} alt='Logo' />
            <h1 className=" text-3xl font-extrabold text-center text-white drop-shadow-xl mb-8 mt-2">Manage Your Todos</h1>
          </div>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App