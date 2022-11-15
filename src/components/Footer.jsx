import React from 'react'
import logo from './assests/logo.svg'
import facebook_icon from './assests/socials/facebook.svg'
import instagram_icon from './assests/socials/instagram-216-721958.svg'
import twitter_icon from './assests/socials/twitter-241-721979.svg'

const community = [
  "NFT",
  "Tokens",
  "Landlords",
  "Discord"
]
const places = [
  "Castle",
  "Farms",
  "Beach",
  "Learn More"
]
const aboutUs = [
  "Road map",
  "Creators",
  "Career",
  "Contact us"
]



function Footer() {
  return (
    <footer className=' px-9 py-7 bg-custom-black-100 w-full text-white'>
      <div className=' container mx-auto'>
      <div className='flex flex-col md:flex-row justify-between md:items-stretch items-center gap-6 '>
        <aside className='flex flex-col items-start relative gap-8 w-full'>
          <img className=' w-48 mb-12md:mb-0 my-3' src={logo} alt="" />
          
          <div className=' md:absolute  md:bottom-0 flex gap-7 items-center'> 
            <img src={facebook_icon } alt="facebook social" />
            <img src={instagram_icon} alt="instagram social"/>
            <img src={twitter_icon} alt="twitter"/>
          </div>

        </aside>

        <aside className='flex flex-col gap-5 items-start w-full border-b md:border-0'>
          <h3 className=' my-3  text-xl font-medium'>Community</h3>
          {community.map(c => (
            <a  className='pb-3' key={c} href="#home">{c}</a>
            
          )
          )}
        </aside>

        <aside className='flex flex-col gap-5 items-start w-full  border-b md:border-0'>
          <h3 className=' my-3 text-xl font-medium'>Places</h3>
          
          {places.map(p => (
            <a className='pb-3' key={p} href="#home">{p}</a>
            
          )
          )}

        </aside>

        <aside className='flex flex-col gap-5 items-start w-full'>
          <h3 className=' my-3 text-xl font-medium'>About us</h3>
          
          {aboutUs.map(a => (
            <a className='pb-3' key={a} href="#home">{a}</a>
            
          )
          )}

        </aside>

        </div>
        <p className='text-start mt-12 text-white'>© 2022 Metabnb</p>

        </div>

    </footer>
  )
}

export default Footer