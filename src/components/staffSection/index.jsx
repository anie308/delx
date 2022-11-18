import React from 'react'

function StaffSection() {
    const teamMembers = [
        //only add new members here, don't touch the code
        {
            memberName: 'Deborah Ifeanyi',
            title: 'Founder and CEO',
        },
        {
            memberName: 'Vivian ',
            title: 'Brand and Graphics Designer',    
        },
        {
            memberName: 'Aniebietabasi Obo ',
            title: 'Office Cleaner', 
        },
    ]
  return (
    <div className='w-full flex flex-col items-center justify-center py-[30px] px-[15px]'>
        <p className='font-[700] text-[18px] md:text-[30px] font-quicksand text-center'>Meet the Brains Behind Delx Writing Academy</p>
        <div className='mt-[50px] flex flex-col md:flex-row items-center justify-center w-full gap-y-16 md:gap-x-28'>
           {
            teamMembers.map(({memberName, title}) => (
                <div className='border rounded-[10px] p-[30px_50px] shadow cursor-pointer'>
                <div className='h-[200px] w-[200px] border rounded-full'> </div>
                <div className='flex items-center flex-col mt-[20px] justify-center '>
                    <p className='font-[700] font-quicksand text-[20px]'>{memberName}</p>
                    <p className='font-[500] font-quicksand text-[14px]'>{title}</p>
                </div>
            </div>
            ))
           }
        </div>
    </div>
  )
}

export default StaffSection