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
    <div className='md:sticky md:top-0 z-10 bg-[#fafafafa] md:p-[15px_40px] flex flex-col md:flex-row  items-center justify-between shadow'>
      <div className='flex p-[15px] md:p-0  items-center justify-between w-full md:w-fit'>
        <div className='font-quicksand font-[900] text-[25px] cursor-pointer'><Link to='/'>Delx Academy</Link></div>
        <div className='md:hidden  cursor-pointer' onClick={() => setToggle(!toggle)}>
          {toggle? <FaTimes className='text-[25px]'/> : <FaBars className='text-[25px]'/>}
        </div>
      </div>
      <div className= {`${toggle? 'left-0' : 'left-[-100%] md:left-0'} transition-left absolute md:relative top-0 flex flex-col md:flex-row items-start md:items-center space-y-10 md:space-y-0 md:space-x-10 w-[220px] sm:w-[300px] md:w-fit h-full md:h-fit bg-gray-100 md:bg-transparent p-[20px] md:p-0`}>
      <div className='flex md:hidden font-quicksand font-[900] text-[25px] cursor-pointer'>Delx Academy</div>
          <div className='flex flex-col md:flex-row items-start md:items-center space-y-5 md:space-y-0 md:space-x-10'>
            {
              navLinks.map(({id, name, path})=> (
                <Link to={path} key={id} className='text-[16px] font-[600] font-quicksand '>{name}</Link>
              ))
            }
          </div>
          <div>
            <Link to='/join-us' className='bg-primary p-[8px_22px] font-quicksand font-[600] text-white  rounded-[4px] cursor-pointer text-[18px]'>Join Us</Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar