import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../assets/123.png'

function HomeHero() {
  return (
    <div className='bg-gradient-to-l from-green-50 md:from-green-100 to-green-100 h-full md:h-[450px] w-full gap-3 flex flex-col md:flex-row items-center justify-between p-[15px] md:p-[20px_40px]'>
      <div className='flex-1'>
        <p className='font-quicksand font-[900] text-[35px] md:text-[50px] leading-[50px] text-center md:text-start md:leading-[60px]'>Welcome to <br /><span className='text-secondary'> Delx Writing Academy.</span></p>
        <p className='mt-[15px] font-quicksand font-[500] text-[16px] text-center md:text-start '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis molestiae sed excepturi nostrum. Facilis, nemo? Unde ullam repudiandae consequatur aliquam recusandae veniam neque illum exercitationem aperiam, est, repellat earum?</p>
        <button className='my-[20px] md:mt-[20px] w-full flex items-center justify-center md:justify-start '>
          <Link to='/join-us' className='bg-secondary p-[12px_28px] font-[700] text-white cursor-pointer rounded-[5px] font-quicksand'>JOIN US</Link>
        </button>
      </div>
      <div className='flex-1 bg-white  rounded-[20px] md:h-[350px] w-full md:w-[300px] flex items-center justify-center shadow'>
        <img src={Image} alt="" className='w-full h-full object-cover'  />
      </div>
    </div>
  )
}

export default HomeHero