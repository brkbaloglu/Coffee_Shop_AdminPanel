import { Outlet} from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import {   FaRegMoon } from "react-icons/fa";
import {  IoIosNotifications  } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import SideBar from "./SideBar";


const Dashboard = () => {
  return (
      <div className="">
        <SideBar />
        
        <div className="py-10">
            <div className="flex items-center justify-between mx-10">
            <div className="flex items-center border-2 w-min px-4 py-2 rounded-xl mx-10 border-[#3b2316]">
                <input className="focus:outline-0" type="text" name="" placeholder="Search Here..." id="" />
                <CiSearch size={25} className="cursor-pointer"/>
            </div>
            <div className="flex items-center">
              <FaRegMoon size={20} className="mx-1 cursor-pointer"/>
              <IoIosNotifications size={20} className="mx-1 cursor-pointer"/>
              <CiSettings size={20} className="mx-1 cursor-pointer"/>
              <CgProfile  size={20} className="mx-1 cursor-pointer"/>
            </div>
            </div>
            <Outlet />
        </div>
      </div>
  )
}


export default Dashboard