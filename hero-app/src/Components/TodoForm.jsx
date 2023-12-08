import { useState } from "react"


const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('')

  const handleSumbit = (e) => {
    e.preventDefault()
    if (task) {
      addTodo(task)

    }
  }





  return (
    <>
      <form className='w-full' onSubmit={handleSumbit}>
        <input type="text" className='outline-none bg-inherit border-2 border-cyan-400 text-white my-7 py-2 px-4 w-72 ' placeholder='What do you want to do!' onChange={(e) => setTask(e.target.value)} />
        <button type="submit" className='bg-cyan-400 py-2.5 px-2 cursor-pointer'>Add Task</button>
      </form>

    </>
  )
}

export default TodoForm
