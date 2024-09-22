import './App.css'
import { TodoForm, TodoList } from './components';
import { ToDoContextProvider } from './context'
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((preVal) => preVal.map((item) => item.id === id ? todo : item));
  }

  const deleteToDo = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(item => item.id === id ? { ...item, completed: !item.completed } : item))
  }

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));

    if (localTodos && localTodos.length) {
      setTodos(localTodos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <ToDoContextProvider value={{ todos, addToDo, updateTodo, deleteToDo, toggleComplete }}>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage Your Todo</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos && todos.map((item) => (
              <div key={item.id}
                className='w-full'
              >
                <TodoList todo={item} />
              </div>))}
          </div>
        </div>
      </div>
    </ToDoContextProvider>

  )
}

export default App
