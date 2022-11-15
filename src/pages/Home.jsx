import React from 'react'
import nft_house_img from '../components/assests/Frame 59546.svg'
import showcase_img from '../components/assests/showcase.svg'
import metamusk_img  from '../components/assests/metamusk.svg'
import mbToken_img  from '../components/assests/MBtoken.svg'
import opensea_img from '../components/assests/opensea.svg'
import Listings from '../components/Listings'

import frame_0 from '../components/assests/frames/Frame 151.svg'
import frame_1 from '../components/assests/frames/Frame 151 (1).svg'
import frame_2 from '../components/assests/frames/Frame 151 (2).svg'
import frame_3 from '../components/assests/frames/Frame 151 (3).svg'
import frame_4 from '../components/assests/frames/Frame 151 (4).svg'
import frame_5 from '../components/assests/frames/Frame 151 (5).svg'
import frame_6 from '../components/assests/frames/Frame 151 (6).svg'
import frame_7 from '../components/assests/frames/Frame 151 (7).svg'
import Modal from '../components/Modal'
import Overlay from './../components/Overlay';



const places = [
  { id: 1, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img: frame_0 },
  {id : 2, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_1 },
  { id: 3, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img: frame_2 },
  { id: 4, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img: frame_3 },
  
  {id : 5, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_4 },
  { id: 6, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img: frame_5 },
  {id : 7, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_6 },
  {id : 8, title: "Desert King", price: "1MBT per night", distance: "2345km away", available: "available for 2weeks stay", rating: 5, img:frame_7 },

]



function Home({modal, overlay, handleCloseModal}) {
  return (
    <main className=''>
      <Modal modal={modal} handleCloseModal={handleCloseModal} />
      <Overlay overlay={overlay}/>
      <section className='flex flex-col-reverse md:flex-row gap-5 items-center p-3 container mx-auto'>
        
        <aside className='w-[100%] flex flex-col items-start justify-center gap-10 p-3 lg:px-10 py-3'>
          <h2 className='text-start text-2xl md:text-4xl font-bold'>Rent a <span className=' text-custom-pink-100'>Place</span> away from <span className=' text-custom-pink-100'>Home</span> in the <span className=' text-custom-pink-100'>Metaverse</span></h2>

          <p className=' text-start text-base md:text-xl'>
          we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
          </p>

          <form className='flex w-full flex-col md:flex-row gap-4 md:gap-0'>
            <input type="text" className='w-full  md:w-[70%] rounded-md md:rounded-r-none px-8 py-2 bg-white text-base outline-none border-[0.1px] md:border-r-0 border-purple-300' placeholder='Search for location' />
            <button type='submit' className='w-full md:w-[30%] px-10 py-2 text-base bg-purple-500 rounded-md rounded-l-none'>Search</button>
          </form>
        </aside>

        <aside className='w-full flex items-center justify-center'>
          <img className='w-full md:w-[70%] scale-90' src={showcase_img} alt=""/>
        </aside>
      </section>

      <section className=' bg-custom-pink-100 flex flex-col md:flex-row justify-between px-9 py-4 w-full gap-14'>
        <img className=' scale-75' src={mbToken_img} alt='' />
        <img className=' scale-75' src={metamusk_img} alt=''/>
        <img className=' scale-75' src={opensea_img} alt=''/>

      </section>

      {/* Listings */}
      <Listings heading="Inspiration for your next adventure" items={places}/>


      <section className=' md:px-9 md:py-10 bg-custom-pink-100' >
        <div className=' text-white flex flex-col-reverse md:flex-row gap-5 md:items-center container mx-auto'>

        <aside className='w-full lg:w-[30%] flex flex-col  md:items-start md:justify-center gap-5 py-4 px-4'>
          <h2 className='text-start text-xl md:text-3xl'>Metabnb NFTs</h2>

          <p className=' text-start text-base md:text-xl self-start'>
            Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
          </p>

          <a href='/' className='px-10 py-2 text-base bg-white text-custom-pink-100 rounded-md self-start'>Learn More</a>
        </aside>

        <aside className='w-full lg:w-[70%] flex items-center justify-center py-3'>
          <img className=' w-[70%]' src={nft_house_img} alt=""/>
        </aside>
        </div>

      </section>

    </main>
  )
}

export default Home