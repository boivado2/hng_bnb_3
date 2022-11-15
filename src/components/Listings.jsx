import React from 'react'
import ListItem from './ListItem';

function Listings({heading, items}) {
  
  return (
    <section className=' px-3 py-6 container mx-auto'>
      {heading ? <h2 className=' text-3xl md:text-5xl font-semibold text-center py-10'>{heading}</h2> : null}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
      {items.map(item => (
        <ListItem key={item.id} item={item}/>
      ))}

    </div>
    </section>
  )
}

export default Listings