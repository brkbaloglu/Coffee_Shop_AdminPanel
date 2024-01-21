import axios from "axios"
import { useEffect, useState } from "react"
import { FaRegMessage } from 'react-icons/fa6'
import { FaRegUser } from 'react-icons/fa'
import { CiCoffeeCup } from 'react-icons/ci'
const Home = () => {

    const [coffee, setCoffee] = useState([])
    const [users, setUsers] = useState([])
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getAllCoffees  = async () =>  {
            const response = await axios.get("http://localhost:3000/auth/coffee")
            setCoffee(response.data)
            console.log(response)
        }

        getAllCoffees()
    }, [])

    useEffect(() => {
        const getAllUsers  = async () =>  {
            const response = await axios.get("http://localhost:3000/auth/users")
            setUsers(response.data)
            console.log(response)
        }

        getAllUsers()
    }, [])

    useEffect(() => {
        const getAllReviews  = async () =>  {
            const response = await axios.get("http://localhost:3000/auth/reviews")
            setReviews(response.data)
            console.log(response)
        }

        getAllReviews()
    }, [])


  return (
    <div className="float-start w-2/3 flex items-center justify-center my-10">
        <div className="w-[33%] border-2 flex items-center justify-center border-[#3b2316] rounded-2xl  h-[200px] mx-2">
        <CiCoffeeCup size={40}/>
            <div className="text-center ml-2">
                <div className="text-xl font-bold">{coffee.length}</div>
                <h2 className="text-2xl font-bold ">Coffees</h2>
            </div>
        </div>
        <div className="w-[33%] border-2 flex items-center justify-center border-[#3b2316] rounded-2xl h-[200px] mx-2">
        <FaRegMessage size={40}/>
            <div className="text-center ml-2">
                <div className="text-xl font-bold">{reviews.length}</div>
                <h2 className="text-2xl font-bold ">Reviews</h2>
            </div>
        </div>
        <div className="w-[33%] border-2 flex items-center justify-center border-[#3b2316] rounded-2xl h-[200px] mx-2">
        <FaRegUser size={40}/>
            <div className="text-center ml-2">
                <div className="text-xl font-bold">{users.length}</div>
                <h2 className="text-2xl font-bold ">Users</h2>
            </div>
        </div>

    </div>
  )
}

export default Home