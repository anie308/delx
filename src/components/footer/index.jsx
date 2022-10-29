import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
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
    <div className='bg-primary grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-end p-[10px] md:p-[20px_40px] text-white'>
      <div>
      <Link to='/' className='font-quicksand font-[900] text-[25px] cursor-pointer'>Delx Academy</Link>
       <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis minus, ea omnis animi est iste ab nemo architecto possimus aspernatur illum, vitae odit officiis distinctio ducimus eos? Exercitationem, eveniet commodi.</p>
       </div>
      <div className='flex flex-col itms-start justify-start'>
        <p className='font-quicksand font-[900] text-[20px] cursor-pointer'>Links</p>
        <div className='flex flex-col  items-start mt-[10px]'>
            {
              navLinks.map(({id, name, path})=> (
                <Link to={path} key={id} className='text-[18px] font-[600] font-quicksand '>{name}</Link>
              ))
            }
          </div>

      </div>
      <div className='flex flex-col itms-start justify-start'>
        <p className='font-quicksand font-[900] text-[20px] cursor-pointer'>Contact</p>

      </div>
     
    </div>
  )
}

export default Footer