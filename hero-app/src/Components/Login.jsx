import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

const Login = () => {
  const [user, setUser] = useState("")
  const auth = useAuth()
  const navigate = useNavigate()


  const handleLogin = () => {
    auth.login(user)
    navigate('/app', { replace: true })
  }
  return (
    <div className='bg-gray-800 mt-7 p-7 rounded-md flex flex-col gap-5'>
      <div className='flex flex-col gap-1'>
        <label className='text-white text-xl'>
          User Name :
        </label>
        <input type="text" onChange={e => setUser(e.target.value)} className='outline-none bg-inherit border-2 border-cyan-400 text-white my-7 py-2 px-4 w-72' />
      </div>
      <button className='bg-cyan-400 py-2.5 px-2 cursor-pointer' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
