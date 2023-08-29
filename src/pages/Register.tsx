import { FormEvent, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Banner from '../components/Banner'

const Register = () => {
  const { register, login } = useAuth()
  const [usernameInput, setUsernameInput] = useState<string>('')
  const [nameInput, setNameInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      await register(usernameInput, nameInput, passwordInput)
      await login(usernameInput, passwordInput)

      toast.success('Registered and Logged In!')
      navigate('/')
    } catch (err: any) {
      console.error(err)
      toast.error(err.message)
    }
  }
  return (
    <>
      <Banner name="Register" />
      <div className="flex justify-center pt-16">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col rounded-2xl border-2 border-solid w-1/4 text-[20px] font-bold gap-6 p-4 bg-[#D9D9D9]"
        >
          <div className="flex flex-col gap-3">
            <label>Username :</label>
            <input
              id="username"
              type="text"
              onChange={(e) => setUsernameInput(e.target.value)}
              className="rounded-lg w-11/12 border-gray-500 p-1"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>Your name :</label>
            <input
              id="yourName"
              type="text"
              onChange={(e) => setNameInput(e.target.value)}
              className="rounded-lg w-11/12 border-gray-500 p-1"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>Password :</label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPasswordInput(e.target.value)}
              className="rounded-lg w-11/12 border-gray-500 p-1"
              required
            />
          </div>

          <button className="rounded-lg bg-[#ff9100] py-3 px-10 text-white">Register</button>
        </form>
      </div>
    </>
  )
}

export default Register