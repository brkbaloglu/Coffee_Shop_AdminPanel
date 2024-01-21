import Header from './Header'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import axios from 'axios' 

const Coffee = () => {
  
  const [coffee, setCoffee] = useState([])

  useEffect(() => {
    const getAllCoffees = async() => {
      const response = await axios.get("http://localhost:3000/coffee")
      setCoffee(response.data)
      console.log(response);
    }
    getAllCoffees()
  }, [])
  

  return (
    <div >
        <Header />
        <div>
          <h2 className='text-center font-bold text-4xl my-10'>Our Coffees</h2>
          <div className='grid grid-cols-3 '>
            {
              coffee.map((coffee) => (
                <div className='flex items-center justify-center flex-col my-5' key={coffee.id}>
                  <img className='w-[300px] rounded-xl' src={coffee.coffeeImgUrl} alt={coffee.coffeeName} />
                  <h2 className='text-xl font-semibold text-[#3b2316] my-2'>{coffee.coffeeName}</h2>
                  <h4 className='text-lg'>{coffee.coffeePrice} $</h4>
                </div>
              ))
            }
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Coffee