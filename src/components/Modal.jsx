import React from 'react'
import metamask_icon from './assests/image 66.svg'
import wallet_connect_icon from './assests/image 69.svg'
import right_arrow_icon from './assests/Group (1).svg'
import close from './assests/x.svg'


function Modal({ modal, handleCloseModal }) {
  if (!modal) return;
  return (
    <div className=' w-full md:w-[50%] mx-auto md:translate-y-[50%] md:translate-x-[50%]  border rounded-md z-50 left-0 absolute text-custom-black-100 bg-white'>
      <div>
        <div className='flex justify-between items-center  px-5 py-3 border-b'>
        <h2 className=' text-xl font-semibold'>Connect Wallet</h2>
        <img src={close} className=" cursor-pointer" onClick={() => handleCloseModal()}  alt=""/>
        </div>

        <div className='flex flex-col px-5 py-3 gap-3'>
          <h4 className='text-start'>choose you preferred wallet</h4>
          
          <div className='flex justify-between outline outline-1 rounded-md p-3 items-center cursor-pointer'>
           
            
            <div className='flex items-center gap-3'>
              <img src={metamask_icon} alt='' />
              
              <p>metamask</p>
              
            </div>

            <div>

            <img src={right_arrow_icon} alt=''/>

            </div>
            
          </div>


          <div className='flex justify-between outline outline-1 rounded-md p-3 items-center cursor-pointer'>
           
            
           <div className='flex items-center gap-3'>
             <img src={wallet_connect_icon} alt='' />
             
             <p>Wallet Connect</p>
             
           </div>

           <div>

           <img src={right_arrow_icon} alt=''/>

           </div>
           
         </div>



          
          
        </div>

        

      </div>
    </div>
  )
}

export default Modal