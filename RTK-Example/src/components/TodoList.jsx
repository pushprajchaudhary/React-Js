/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slice/todoSlice';
import { useState } from 'react'

function TodoList({ todo }) {
    const [todoText, setTodoText] = useState(todo.text);

    const dispatch = useDispatch();

    const editTodo = () => {
        dispatch(updateTodo({ id: todo.id, text: todoText }));
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black bg-[#c6e9a7]`}
        >
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg border-black/10 px-2`}
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => editTodo()}
            >
                {"📁"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(deleteTodo(todo.id))}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoList