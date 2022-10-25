import React from 'react'
import { Link } from 'react-router-dom'
import {fakeData} from '../../data'

function Card() {
  return (
    <div className='p-[60px_40px] bg-green-50'>
      <div className='flex w-full  items-center justify-center px-[10px]'>
      <div className='w-full flex items-center justify-around gap-5'>
      {
        fakeData.map(({id, title, content, slug})=> (
        <Link to={`/blog/${slug}`}>
          <div className='bg-white shadow rounded-[10px] w-[300px] h-[200px] cursor-pointer'>
            lorem
          </div>
        </Link>
        ))
      }
      </div>
      </div>
    </div>
  )
}

export default Card