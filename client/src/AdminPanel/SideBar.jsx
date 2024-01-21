import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome, FaCoffee, FaRegUser } from "react-icons/fa";
import { FaRegMessage  } from "react-icons/fa6";
import { IoIosLogOut  } from "react-icons/io";

const SideBar = () => {

    const navigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () => {
    axios.get("http://localhost:3000/auth/logout")
    .then(result => {
      if(result.data.Status){
        navigate("/adminlogin")
      }
    })
  }

  return (
    <div>
        <div className="float-start w-1/5 border-r-2 h-[1000px] py-10 flex flex-col items-center mr-5">
            <h2 className='text-2xl font-bold text-[#3b2316] mb-10'>CoffeeShop</h2>
          <div>
            <Link to="/dashboard"></Link>
            <ul>
              <li >
                <Link to="/dashboard/home">
                  <i ></i>
                  <span className="flex items-center hover:bg-[#3b2316] hover:text-white p-2 rounded-xl text-xl font-semibold my-4"><FaHome size={20} className="mx-2" />Home</span>
                </Link>
              </li>
              <li >
                <Link to="/dashboard/coffee">
                  <i ></i>
                  <span className="flex items-center hover:bg-[#3b2316] hover:text-white p-2 rounded-xl text-xl font-semibold my-4"><FaCoffee  size={20} className="mx-2" />Coffee</span>
                </Link>
              </li>
              <li >
                <Link to="/dashboard/reviews">
                  <i ></i>
                  <span className="flex items-center hover:bg-[#3b2316] hover:text-white p-2 rounded-xl text-xl font-semibold my-4"><FaRegMessage  size={20} className="mx-2" />Reviews</span>
                </Link>
              </li>
              <li >
                <Link to="/dashboard/users">
                  <i ></i>
                  <span className="flex items-center hover:bg-[#3b2316] hover:text-white p-2 rounded-xl text-xl font-semibold my-4"><FaRegUser   size={20} className="mx-2" />Users</span>
                </Link>
              </li>
              <li onClick={handleLogout}>
              <Link>
                  <i ></i>
                  <span  className="flex items-center hover:bg-[#3b2316] hover:text-white p-2 rounded-xl text-xl font-semibold my-4"><IoIosLogOut  size={20} className="mx-2" />Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default SideBar