import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './assests/logo.svg'

function Navbar({handleConnectWallet}) {
  return (
    <nav className=''>
      <div className='flex flex-col lg:flex-row gap-7 justify-between items-center px-9 py-6 container mx-auto '>
        
      <img className=' w-40' src={Logo} alt='site logo' />


        <div className=' flex flex-col lg:flex-row justify-center lg:justify-between  gap-5 lg:gap-14'>

          <ul className=' flex justify-between gap-7 flex-wrap'>
                     
            <Link to="/" className=' cursor-pointer'>Home</Link>
                     
            <Link to="/places" className=' cursor-pointer'>Place to stay</Link>
              
            <Link to="/nft" className=' cursor-pointer'>Nft</Link>
          
            <Link to="/community" className=' cursor-pointer'>Community</Link>
                     
          </ul>
          

          <button onClick={() => handleConnectWallet()} type='button' className='px-10 py-2 text-base bg-custom-pink-100 text-white rounded-md self-center'>connect wallet</button>
          


        </div>

        

        
    </div>

    </nav>
  )
}

export default Navbar