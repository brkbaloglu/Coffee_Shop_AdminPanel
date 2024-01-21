import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center justify-around my-5 sticky top-0 bg-white z-10 h-[70px]'>
        <div>
            <h2 className='text-2xl font-bold text-[#3b2316]'>CoffeeShop</h2>
        </div>
        <div>
            <Link to="/" className='mx-2 text-black hover:bg-[#3b2316] hover:text-white font-semibold p-2 rounded-xl'>Home</Link>
            <Link to="/about" className='mx-2 text-black hover:bg-[#3b2316] hover:text-white font-semibold p-2 rounded-xl'>About</Link>
            <Link to="/coffee" className='mx-2 text-black hover:bg-[#3b2316] hover:text-white font-semibold p-2 rounded-xl'>Coffee</Link>
            <Link to="/reviews" className='mx-2 text-black hover:bg-[#3b2316] hover:text-white font-semibold p-2 rounded-xl'>Reviews</Link>
            <Link to="/contact" className='mx-2 text-black hover:bg-[#3b2316] hover:text-white font-semibold p-2 rounded-xl'>Contact</Link>
            <Link to="/adminlogin" className='mx-2 bg-[#3b2316] text-white font-semibold px-4 py-2 rounded-xl'>Log In</Link>
        </div>
    </div>
  )
}

export default Header