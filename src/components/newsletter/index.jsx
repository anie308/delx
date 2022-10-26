import React from 'react'

function NewsLetter() {
  return (
    <div className='py-[50px] md:py-[80px] px-[10px] md:px-[40px] flex items-center flex-col w-full'>
        <div className='w-full text-center mb-[20px] '>
            <p className='font-quicksand  text-[25px] font-[600]'>Join Our NewsLetter</p>
            <p className='font-quicksand  text-[18px] font-[500]'>Get exciting tips on how to learn and grow with your writing</p>
            </div>
        <div className='w-full flex items-center justify-center'>
            <form action="" className='flex flex-col md:flex-row items-center w-full md:w-[70%]  border-0 md:border p-[5px] rounded-[5px] space-y-3 md:space-y-0'>
                <div className='w-full'>
                    <input type="email" required className='font-quicksand w-full outline-none h-[40px] px-[10px] border md:border-0 placeholder:font-quicksand' placeholder='Enter your email...'/>
                </div>
                <div className='w-full md:w-fit'>
                    <button type='submit' className='bg-secondary h-[40px] px-[30px] w-full  text-white font-quicksand rounded-[5px]'>Subscribe</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default NewsLetter