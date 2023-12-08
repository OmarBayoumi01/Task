import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TodoForm from './TodoForm'
import Todo from './Todo'
import EditTodoFrom from './EditTodoFrom'
import { useAuth } from './Auth'

const TodoWrapper = () => {
  const [todos, setTodo] = useState([])

  const [serach, setSearch] = useState('')

  const [fav, setFav] = useState(false)
  const [done, setDone] = useState(false)



  const auth = useAuth()
  const navigate = useNavigate()



  const addTodo = todo => {
    setTodo([...todos, { id: Math.random() * 100, task: todo, completed: false, isEditing: false, favorite: false }])
    console.log(todos)
  }

  const toggleComplete = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  const toggleFavorite = (id) => {
    setTodo(todos.map((todo) => todo.id === id ? { ...todo, favorite: !todo.favorite } : todo))
  }

  const deletTask = (id) => {
    setTodo(todos.filter(todo => todo.id !== id))
  }

  const editTask = id => {
    setTodo(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }

  const editTodo = (task, id) => {
    setTodo(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
  }

  const onSearchChange = e => {
    const searchFieldString = e.target.value
    setSearch(searchFieldString)
  }

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }



  return (
    <>
      <div className='bg-gray-800 mt-7 p-7 rounded-md '>
        <div className='flex flex justify-between'>
          <h1 className='text-white text-xl' >Welcome {auth.user} </h1>
          <button onClick={handleLogout} className='bg-cyan-400 py-2.5 px-2 cursor-pointer' > Logout </button>
        </div>
        <TodoForm addTodo={addTodo} todos={todos} />
        <div className='flex justify-between gap-1 items-start'>
          <input value={serach} onChange={onSearchChange} type="text" placeholder="Search..." className='outline-none bg-inherit border-2 border-cyan-400 text-white mb-5 py-2 px-4 w-44 ' />
          <button className='bg-cyan-400 py-2 rounded-md    cursor-pointer' onClick={() => setFav(!fav)} >Show Favorites</button>
          <button className='bg-cyan-400 py-2  rounded-md   cursor-pointer' onClick={() => setDone(!done)} >Show Done</button>
        </div>
        {todos.filter((task) => {
          return task.task.toLowerCase().includes(serach) && (fav ? task.favorite === true : true) && (done ? task.completed === true : true)
        }).map((task, index) => (
          task.isEditing ? (
            <EditTodoFrom editTodo={editTodo} task={task} />
          ) : <Todo task={task} key={index} toggleComplete={toggleComplete} toggleFavorite={toggleFavorite} deletTask={deletTask} editTask={editTask} />
        ))}

      </div>
    </>
  )
}

export default TodoWrapper
