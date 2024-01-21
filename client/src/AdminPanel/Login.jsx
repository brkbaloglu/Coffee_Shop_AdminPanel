import { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/adminlogin', values)
        .then((result) => {
            if(result.data.loginStatus){
                navigate("/dashboard/home")
            }else{
                setError(result.data.Error)
            }
        })
        .catch((err) => {console.log(err)})
    }

  return (
    <div className=' bg-[url(https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=5128&h=3045&dpr=1)] h-screen bg-cover bg-center '>
        <div className='flex items-center justify-center flex-col h-screen'>
            <div className='relative bg-white opacity-95 h-[80%] w-[60%] rounded-xl flex items-center justify-center flex-col'>
            
            <h2 className='text-4xl font-bold text-[#3b2316] mb-10'>Login Page</h2>
            
            <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col'>
                <div >
                    <input className='w-[400px] my-2 border-2 border-[#3b2316] p-2 rounded-xl' type="email" name='email' autoComplete='off' placeholder='Enter Email'
                     onChange={(e) => setValues({...values, email : e.target.value})} />
                </div>
                <div > 
                    <input className='w-[400px] my-2 border-2 border-[#3b2316] p-2 rounded-xl' type="password" name='password' placeholder='Enter Password'
                     onChange={(e) => setValues({...values, password : e.target.value})}/>
                </div>
                <div className='text-red-600 font-semibold '>
                {error && error}
                </div>
                <button className='border-2 border-[#3b2316] px-4 py-2 rounded-xl hover:bg-[#3b2316] hover:text-white'>Log in</button>
                <Link to="/" className='absolute top-5 left-5 flex items-center '><FaArrowLeft className='mr-2'/>Go Back Main Page</Link>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login