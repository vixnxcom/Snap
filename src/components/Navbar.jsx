import React from 'react'
import styles from '../style'

const Navbar = () => {
  return (
    <body className='body'>
   
   {/* toggle botton ///////////////////////////////////*/}
   <div className='btn' id='toggle-btn'>
     <div className='btn-outline btn-outline-1'></div>
     <div className='btn-outline btn-outline-2'></div>

     <div id='hamburger'>
     <span></span> 
     </div>

   </div>
   {/*toggle  botton */}
      

    {/* overlay ////////////////////////////////////////*/}
    <div className='overlay'>
       {/* <svg viewBox='0 0 1000 1000'>
       <path d='M0 2S175 1 500 1s500 1 500 1V0H0Z'>
       </path>
       </svg> */}
    </div>
    {/* overlay */}
     

     {/* menu */}
   <div className={`${styles.flexStart} menu h-screen`}>
    {/* primary menu */}
   
    <div className='primary-menu'>
        <div className='menu-container'>
        <div className='wrapper'>

          <div className='menu-item'>
            <a href="#"><span>I</span>Index</a>
            <div className='menu-item-revealer'></div>
          </div>
      
           <div className='menu-item'>
            <a href="#"><span>II</span>Work</a>
            <div className='menu-item-revealer'></div>
           </div>

        <div className='menu-item'>
         <a href="#"><span>III</span>About</a>
         <div className='menu-item-revealer'></div>
        </div>
         

        </div>
        </div>
      </div>
    {/* primary menu */}


    {/* secondary menu */}
    <div className='secondary-menu z-[999]'>
        <div className='menu-container'>
            <div className='wrapper'>
              
            <div className='menu-item'>
            <a href="#">Speaker</a>
            <div className='menu-item-revealer'></div>
          </div>

            <div className='menu-item'>
            <a href="#">Blog</a>
            <div className='menu-item-revealer'></div>
          </div>

            <div className='menu-item'>
            <a href="#">Contact</a>
            <div className='menu-item-revealer'></div>
          </div>

            <div className='menu-item'>
            <a href="#">Credits</a>
            <div className='menu-item-revealer'></div>
          </div>





            </div>
        </div>
    </div>
    {/* secondary menu */}
    </div>
    {/* menu */}

    </body>
  )
}

export default Navbar