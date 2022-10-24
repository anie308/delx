import React from 'react'

function HomeHero() {
  return (
    <div className='h-full md:h-[400px] w-full gap-3 flex flex-col md:flex-row items-center justify-between p-[15px] md:p-[20px_40px]'>
      <div className='flex-1'>
        <p className='font-quicksand font-[900] text-[35px] md:text-[50px] leading-[50px] text-center md:text-start md:leading-[60px]'>Welcome to <br /><span className='text-secondary'> Delx Academy.</span></p>
        <p className='mt-[15px] font-quicksand font-[500] text-[16px] text-center md:text-start '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis molestiae sed excepturi nostrum. Facilis, nemo? Unde ullam repudiandae consequatur aliquam recusandae veniam neque illum exercitationem aperiam, est, repellat earum?</p>
      </div>
      <div className='flex-1 bg-green-300 h-full'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum corrupti saepe, et tempora dolore, odit ut reiciendis hic facilis numquam eligendi maxime adipisci esse mollitia impedit accusamus sit officiis</div>
    </div>
  )
}

export default HomeHero