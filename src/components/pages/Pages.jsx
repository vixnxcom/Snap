import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'

import styles from '../../style'

import Home from '../Home'
import Button from '../Button'
import Nav from '../Nav'
import Menu from '../Menu'


const Pages = () => {
  return (
    <>
<Router >
     <div className=' w-full overflow-hidden'> 
      <div className={`${styles.boxWidth} mx-auto`}>
        <Nav />
     </div>
     </div>


<Routes>

    <Route exact path ='/' element={<Home />} />  
    <Route exact path ='/button' element={<Button />} />  


</Routes>

<div className='mt-10'>
    <Menu/>
   </div>

</Router> 
    </>
  )
}

export default Pages