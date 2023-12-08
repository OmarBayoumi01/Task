import React from 'react'

const Todo = ({ task, toggleComplete, toggleFavorite, deletTask, editTask }) => {
  return (
    <div className='flex justify-between items-center py-3 px-4 rounded-md mb-4 bg-cyan-400 '>
      <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div className='flex gap-3 text-sm'>
        <p onClick={() => editTask(task.id)} className='text-white cursor-pointer'>Edit</p>
        <p onClick={() => toggleFavorite(task.id)} className={`${task.favorite ? "favorite" : "notfavorite"}`}>Favorite</p>
        <p onClick={() => deletTask(task.id)} className='text-red-600 cursor-pointer'>X</p>
      </div>
    </div>
  )
}

export default Todo
