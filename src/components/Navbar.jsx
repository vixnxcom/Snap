import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // Function to handle menu item selection
  const handleSelection = () => {
    setToggle(false); // Close the mobile menu
  };

  return (
    <nav className='nav-section xl:w-[40%] md:w-[80%] sm:w-[88%] ss:w-[100%] z-[920] '>
      <div className='w-full flex py-4 justify-between items-center navbar navbarr bg-transparent'>
        {/* logo */}
        <div className='flex flex-row border-logo mx-2 '>
        <img src={logo} alt="Logo" className='w-[61.2px] h-[58.7px] ' />
         {/* text */}
         <div className='mx-2 text-white text-shadoww '>
          <h1 className='text-[24px] neue-medium ' >Champions Global</h1>
          <h1 className='neue-thin'>Consulting</h1>
         </div>
        </div>
        {/* logo */}

        <ul className={`md:flex ${toggle ? 'flex flex-col open' : 'hidden'} md:space-x-8 galgo  `}>
          <li className='nav-item '>
            <Link to='/'  onClick={handleSelection}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' onClick={handleSelection}>About</Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' onClick={handleSelection}>Contact</Link>
          </li>
        </ul>

        {/* toggle */}
        <div className='md:hidden menu-icon z-[800] flex flex-col fixed-icon '>
      
         <div>
         <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[72px] h-[56px] object-contain mr-2'
            onClick={() => setToggle(!toggle)}
          />
         </div>
        
        </div>
        {/* toggle */}
      </div>
    </nav>
  );
}

export default Navbar;

