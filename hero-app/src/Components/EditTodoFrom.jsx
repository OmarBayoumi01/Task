import { useState } from 'react'

const EditTodoFrom = ({ editTodo, task }) => {
  const [value, setvalue] = useState("")

  const handleSumbit = (e) => {
    e.preventDefault()
    if (task) {
      editTodo(value, task.id)
    }
  }

  return (
    <form className='w-full' onSubmit={handleSumbit}>
      <input type="text" className='outline-none bg-inherit border-2 border-cyan-400 text-white my-7 py-2 px-4 w-72 ' placeholder='Update Task' onChange={(e) => setvalue(e.target.value)} />
      <button type="submit" className='bg-cyan-400 py-2.5 px-2 cursor-pointer'>Update Task</button>
    </form>
  )
}

export default EditTodoFrom
