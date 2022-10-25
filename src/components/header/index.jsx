import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaTimes, FaBars} from 'react-icons/fa'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const navLinks = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'About',
      path: '/about'
    },
    {
      id: 3,
      name: 'Blog',
      path: '/blog'
    },
    {
      id: 4,
      name: 'Contact Us',
      path: '/contact-us'
    },
  ]
  return (
    <div className=' lg:top-0 z-10  lg:p-[18px_40px] flex flex-col lg:flex-row  items-center justify-between '>
      <div className='flex p-[15px] lg:p-0  items-center justify-between w-full lg:w-fit'>
        <div className='font-quicksand font-[900] text-[28px] cursor-pointer text-primary '><Link to='/'>Delx Academy</Link></div>
        <div className='lg:hidden  cursor-pointer' onClick={() => setToggle(!toggle)}>
          {toggle? <FaTimes className='text-[25px]'/> : <FaBars className='text-[25px]'/>}
        </div>
      </div>
      <div className= {`${toggle? 'left-0' : 'left-[-100%] lg:left-0'} transition-left absolute lg:relative top-0 flex flex-col lg:flex-row items-start lg:items-center space-y-10 lg:space-y-0 lg:space-x-10 w-[220px] sm:w-[300px] lg:w-fit h-full lg:h-fit bg-gray-100 lg:bg-transparent p-[20px] lg:p-0`}>
      <div className='flex lg:hidden font-quicksand font-[900] text-[25px] cursor-pointer'>Delx Academy</div>
          <div className='flex flex-col lg:flex-row items-start lg:items-center space-y-5 lg:space-y-0 lg:space-x-10'>
            {
              navLinks.map(({id, name, path})=> (
                <Link to={path} key={id} className='text-[18px] font-[600] font-quicksand ' onClick={() => setToggle(!toggle)}>{name}</Link>
              ))
            }
          </div>
          <div>
            <Link to='/join-us' className='bg-primary p-[10px_24px] font-quicksand font-[600] text-white  rounded-[4px] cursor-pointer text-[18px]'>Join Us</Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar