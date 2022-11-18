import React from 'react'

function AboutDesc() {
  return (
    <div className='grid md:grid-cols-2 p-[15px] md:p-[40px] gap-5'>
        <div className='border grid gap-5 p-[30px]'>
            <div className=''>
                <div>
                    <p className='text-[25px] font-quicksand font-[800] mb-[10px]'>Our Vision</p>
                    <div className='font-quicksand text-[12px] md:text-[16px] font-[500]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae molestias voluptas necessitatibus quia suscipit vero vel doloremque dolore praesentium, quasi corporis explicabo porro vitae exercitationem, deleniti sunt eum error.</div>
                </div>
                
            </div>
            <div className=''>
                <div>
                    <p className='text-[25px] font-quicksand font-[800] mb-[10px]'>Our Mission</p>
                    <div className='font-quicksand text-[12px] md:text-[16px] font-[500]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae molestias voluptas necessitatibus quia suscipit vero vel doloremque dolore praesentium, quasi corporis explicabo porro vitae exercitationem, deleniti sunt eum error.</div>
                </div>
                
            </div>
        </div>
        <div className='border flex items-center justify-center'>Some image depicting the brand</div>
        
    </div>
  )
}

export default AboutDesc