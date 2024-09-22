import { createSlice, nanoid } from '@reduxjs/toolkit';

export const initialState = {
    todos: [
        { id: nanoid(), text: 'Hello World' },
        { id: nanoid(), text: 'Hi Pushp' }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            const data = {id: nanoid(), text: actions.payload}
            state.todos.push(data);
        },
        updateTodo: (state, actions) => {
            state.todos = state.todos.map(item => {
                if (item.id === actions.payload.id) {
                    return {id: item.id, text: actions.payload.text}
                } else {
                    return item;
                }
            });
        },
        deleteTodo: (state, actions) => {
           state.todos = state.todos.filter(item => item.id !== actions.payload)
        }
    }
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;