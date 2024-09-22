/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react';

export const ToDoContext = createContext({
    todos: [
        {
            id: Number,
            todo: String,
            completed: Boolean
        }],
        addToDo: (todo) => {},
        updateTodo: (id, todo) => {},
        deleteToDo: (id) => {},
        toggleComplete: (id) => {}
});

export const useToDoContext = () => {
    return useContext(ToDoContext);
};

export const ToDoContextProvider = ToDoContext.Provider;