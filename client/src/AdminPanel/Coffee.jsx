import { useEffect, useState } from 'react'
import axios from 'axios'
const Coffee = () => {

  const [coffee, setCoffee] = useState([])
  useEffect(() => {
    const getAllCoffees = async () => {
      const response = await axios.get("http://localhost:3000/auth/coffee")
      setCoffee(response.data)
      console.log(response);
    }
    getAllCoffees()
  }, [])
  return (
    <div className='px-5 mt-5'>
      <div className=''>
          <h3 className='my-5 text-4xl font-bold text-[#3b2316]'>Coffee List</h3>
        <div className='mt-3'>
          <table className='w-[75%] '>
            <thead>
              <tr>
                <th className="w-[40%] text-start">Name</th>
                <th className="w-[20%] text-start">Price</th>
                <th className="w-[40%] text-start">Description</th>
              </tr>
            </thead>
            <tbody>
              {
                coffee.map((coffee, id) => (
                  <tr key={id} className=''>
                    <td className="p-2 border-2 border-gray-200">{coffee.coffeeName}</td>
                    <td className="p-2 border-2 border-gray-200 text-green-500">${coffee.coffeePrice}</td>
                    <td className="p-2 border-2 border-gray-200">{coffee.coffeeDescription}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Coffee