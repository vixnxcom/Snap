import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'

import styles from '../../style'

import Home from '../Home'
import Button from '../Button'
import Nav from '../Nav'
import Menu from '../Menu'
import List from '../List'
import Variants from '../Variants'
import Buttonv from '../Buttonv'


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

    <Route exact path ='/' element={<Buttonv/>} />  
    <Route exact path ='/button' element={<Button />} />  


</Routes>



</Router> 
    </>
  )
}

export default Pages