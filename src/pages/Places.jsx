import React from 'react'
import Listings from '../components/Listings'
import frame_0 from '../components/assests/frames/Frame 151.svg'
import frame_1 from '../components/assests/frames/Frame 151 (1).svg'
import frame_2 from '../components/assests/frames/Frame 151 (2).svg'
import frame_3 from '../components/assests/frames/Frame 151 (3).svg'
import frame_4 from '../components/assests/frames/Frame 151 (4).svg'
import frame_5 from '../components/assests/frames/Frame 151 (5).svg'
import frame_6 from '../components/assests/frames/Frame 151 (6).svg'
import frame_7 from '../components/assests/frames/Frame 151 (7).svg'
import frame_8 from '../components/assests/frames/Frame 151 (8).svg'
import frame_9 from '../components/assests/frames/Frame 151 (9).svg'
import frame_10 from '../components/assests/frames/Frame 151 (10).svg'
import frame_11 from '../components/assests/frames/Frame 151 (11).svg'
import frame_12 from '../components/assests/frames/Frame 151 (12).svg'
import frame_13 from '../components/assests/frames/Frame 151 (13).svg'
import frame_14 from '../components/assests/frames/Frame 151 (14).svg'
import frame_15 from '../components/assests/frames/Frame 151 (15).svg'
import settingIcon from '../components/assests/setting-5.svg'




const places = [
  { id: 1, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img: frame_0 },
  {id : 2, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_1 },
  {id : 3, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_2 },
  { id: 4, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img: frame_3 },
  
  {id : 5, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_4 },
  { id: 6, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img: frame_5 },
  {id : 7, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_6 },
  {id : 8, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_7 },


  {id : 9, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_8 },
  {id : 10, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_9 },
  {id : 11, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_10 },
  {id : 12, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_11 },

  {id : 13, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_12 },
  {id : 14, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_13 },
  {id : 15, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_14 },
  {id : 16, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_15 },


]

const filteringList = [
  "Restaurant",
  "Cottage",
  "Castle",
  "Fantasy City",
  "Beach",
  "Carbines",
  "Off-grid",
  "Farm",
]

function Places() {
  return (
    <section className=' container mx-auto'>

      <header className='w-full flex justify-start  items-center gap-6 p-5 py-14 md:px-9'>
        <ul className='flex gap-10   overflow-x-auto px-3 py-2 flex-nowrap'>
        {filteringList.map(item => (
          <li className=' whitespace-nowrap cursor-pointer'>{item}</li>
         ))}
        </ul>
        <div className=' cursor-pointer px-6 outline outline-1 py-2 text-base bg-white text-custom-pink-100 rounded-md  flex gap-3 items-center '>
          <small>Location</small>
          <img className=' w-8' src={settingIcon} alt='' />
        </div>
      </header>

      <Listings items={places}/>

    </section>
  )
}

export default Places