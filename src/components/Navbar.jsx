import React from 'react'

const Navbar = () => {
  return (
   <nav className='nav-section w-full z-[999]  '>
   <div className='absolute top-4 left-2 flex flex-row text-white '>
    {/* logo */}
  <div className='w-40'>
    <h1 className='text-black '>
        Snuk - The Edge
    </h1>
    </div>
    <button className='text-black '>
       <p>open</p>
    </button>
    {/* logo */}
   </div>
   </nav>
  )
}

export default Navbar
