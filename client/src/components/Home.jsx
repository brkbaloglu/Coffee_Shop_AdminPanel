import { Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Home = () => {
  return (
    <div id="home">
      <Header />
      <div className="bg-[url(https://images.pexels.com/photos/2159106/pexels-photo-2159106.jpeg?auto=compress&cs=tinysrgb&w=5760&h=3840&dpr=1)] bg-cover bg-center h-screen"></div>
      <div className="flex items-center justify-center flex-col my-5">
        <h2 className="text-5xl font-bold text-[#3b2316] my-4">Welcome to our Coffee Shop</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis sint quo iste quae nam!</p>
        <div className="my-5">
          <Link to="/about" className="text-[#3b2316] bg-white mx-2 px-4 py-2 rounded-xl border-2 border-[#3b2316] ">About Us</Link>
          <Link to="/coffee" className="text-white bg-[#3b2316] mx-2 px-4 py-2 rounded-xl border-2 border-[#3b2316] hover:bg-white hover:text-[#3b2316]">See Our Coffees </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home