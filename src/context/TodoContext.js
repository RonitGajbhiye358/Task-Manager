import { useContext, createContext } from "react";

export const TodoContext = createContext({
    Todos: [
        {
            id: 1,
            todo: "loll",
            completed: false
        }
    ],
    AddTodo: (todo) => { },
    UpdateTodo: (id,todo) => { },
    DeleteTodo: (id) => { },
    ToggleComplete: (id) => { }
}) 

export const UseTodo = () =>{
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider;
