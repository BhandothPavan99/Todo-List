import {useContext , createContext} from 'react'

export const TodoContext = createContext({
        todos : {
            id : "7",
            todo :"todo message",
            completed : false,
        },
        addTodo:(todo) => {},
        updateTodo:(id, todo) => {},
        deleteTodo:(id) => {},
        toggleComplete:(id) => {}

})


export default function useTodo() {
    return useContext(TodoContext) 
}
export const TodoProvider = TodoContext.Provider