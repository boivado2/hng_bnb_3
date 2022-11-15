import React from 'react'
import starRating from './assests/frames/Frame 59528.svg'

function ListItem({ item: { img, id, title, distance, price, available, rating } }) {



  return (
    <div className='flex flex-col justify-center px-3 py-3 border-[0.8px] rounded-xl cursor-pointer'>

      <div className='pb-7'>
        <img className=' w-full object-cover' src={img} alt={img} />
      </div>

      <div className='flex flex-col gap-4'>

        <div className='flex items-center justify-between'>
          <h4 className=' text-xs'>{title}</h4>
          
          <small className=' text-xs'>{price}</small>
        </div>
        
        <div className='flex  text-start justify-between items-center'>
          <small className='text-xs'>{distance}</small>
          
          <small className='text-xs'>{available}</small>
          
        </div>
        
        <img className=' flex-none self-start' src={starRating}  alt=""/>
      </div>

    </div>
  )
}

export default ListItem