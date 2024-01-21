import { Link } from "react-router-dom"
import { FaFacebookSquare, FaPinterest, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className="grid grid-cols-3 my-10 h-[200px]">
            <div className="flex items-center justify-center flex-col">
                <h2 className='text-3xl font-bold text-[#3b2316]'>CoffeeShop</h2>
            </div>
            <div className="flex items-center justify-center flex-col border-x-4 border-[#3b2316]">
                <Link className="hover:underline underline-offset-8 font-semibold text-lg" to="/">FAQ</Link>
                <Link className="hover:underline underline-offset-8 font-semibold text-lg" to="/">FAQ</Link>
                <Link className="hover:underline underline-offset-8 font-semibold text-lg" to="/">FAQ</Link>
                <Link className="hover:underline underline-offset-8 font-semibold text-lg" to="/">FAQ</Link>
            </div>
            <div className="flex items-center justify-center flex-col">
                <Link className="hover:underline underline-offset-8 font-semibold text-lg" to="/">Home</Link>
                <Link className="hover:underline underline-offset-8 font-semibold text-lg" to="/about">About</Link>
                <Link className="hover:underline underline-offset-8 font-semibold text-lg" to="/coffee">Coffee</Link>
                <Link className="hover:underline underline-offset-8 font-semibold text-lg" to="/reviews">Reviews</Link>
                <Link className="hover:underline underline-offset-8 font-semibold text-lg" to="/contact">Contact</Link>
            </div>
        </div>
        <div className="flex items-center justify-center px-10 py-2 my-10 bg-[#3b2316] text-white ">
            <Link><FaFacebookSquare size={30} className="p-1 duration-300 hover:scale-150" /></Link>
            <Link><FaTwitter size={30} className="p-1 duration-300 hover:scale-150"  /></Link>
            <Link><FaInstagram size={30} className="p-1 duration-300 hover:scale-150"  /></Link>
            <Link><FaLinkedin size={30} className="p-1 duration-300 hover:scale-150"  /></Link>
            <Link><FaPinterest size={30} className="p-1 duration-300 hover:scale-150"  /></Link>
        </div>
    </div>
  )
}

export default Footer