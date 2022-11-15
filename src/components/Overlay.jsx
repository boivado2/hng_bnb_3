import React from 'react'

function Overlay({ styles, overlay, handleCloseModal }) {

  if(!overlay) return
  return (
    <div
      onClick={() => handleCloseModal()}
      className={`fixed top-0 left-0 right-0 h-screen w-full bg-custom-black-100 opacity-[0.7] ${styles}`} id="overlay" >

      </div>
  )
}

export default Overlay