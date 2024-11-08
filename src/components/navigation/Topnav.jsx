import React from 'react'
import {  NavLink } from 'react-router-dom'

function Topnav() {
  return (
    <div className='max-w-[1920px] px-8 flex justify-between m-auto bg-[#1D2026]'>

        <nav className="max-w-[520px] gap-2  p-4 ">
            <NavLink
                to="/"
                className={({ isActive }) =>
                `${isActive ? "text-white border-t-2 border-[#FF6636] p-4" : "p-4 text-[#8C94A3]"} navlink-typography`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/courses"
                className={({ isActive }) =>
                `${isActive ? "text-white border-t-2 border-[#FF6636] p-4" : "p-4 text-[#8C94A3]"} navlink-typography`
                }
            >
                Courses
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                `${isActive ? "text-white border-t-2 border-[#FF6636] p-4" : "text-[#8C94A3] p-4"} navlink-typography`
                }
            >
                About
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                `${isActive ? "text-white border-t-2 border-[#FF6636] p-4" : "p-4 text-[#8C94A3]"} navlink-typography`
                }
            >
                Contact
            </NavLink>
            <NavLink
                to="/becomeaninstructor"
                className={({ isActive }) =>
                `${isActive ? "text-white border-t-2 border-[#FF6636] p-4 " : "p-4 text-[#8C94A3]"} navlink-typography`
                }
            >
                Become an instructor
            </NavLink>
        </nav>

        <div className='max-w-[137px] flex gap-6 mt- mr-8'>
            <select name="" id=""  className="  text-[#A1A5B3] select-typography">
                <option value="usd">USD</option>
                <option value="inr">INR</option>
            </select>
            <select name="" id="" className=" text-[#A1A5B3] select-typography">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
            </select>
        </div>
    </div>
  )
}

export default Topnav
