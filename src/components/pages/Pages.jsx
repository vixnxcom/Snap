import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'

import styles from '../../style'

import Home from '../Home'


const Pages = () => {
  return (
    <>
<Router >
     <div className=' w-full overflow-hidden'> 
      <div className={`${styles.boxWidth} mx-auto`}>
        <Navbar />
     </div>
     </div>


<Routes>

    <Route exact path ='/' element={<Home />} />  


</Routes>

  

</Router> 
    </>
  )
}

export default Pages