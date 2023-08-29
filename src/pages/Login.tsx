import { FormEvent, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Banner from '../components/Banner'

const Login = () => {
  const { login } = useAuth()
  const [usernameInput, setUsernameInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      await login(usernameInput, passwordInput)

      toast.success('Successfully Login')
      navigate('/')
    } catch (err: any) {
      console.error(err)
      toast.error(err.message)
    }
  }
  return (
    <>
      <Banner name="Login" />
      <div className="flex justify-center pt-16">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col rounded-2xl border-2 border-solid w-1/4 text-[20px] font-bold gap-6 p-4 bg-[#D9D9D9]"
        >
          <div className="flex flex-col gap-3">
            <label>USERNAME :</label>
            <input
              id="username"
              type="text"
              className="rounded-lg  w-11/12 border-gray-500 p-1"
              onChange={(e) => setUsernameInput(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>PASSWORD :</label>
            <input
              id="password"
              type="password"
              className="rounded-lg w-11/12 border-gray-500 p-1"
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
          </div>

          <div className="flex place-content-around">
            <button className="rounded-lg bg-[#ff9100] py-3 px-10 text-white">Login</button>
            <button className="rounded-lg bg-[#ff9100] py-3 px-8 text-white">Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login