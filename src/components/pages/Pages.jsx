import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import styles from '../../style'
import HeroImage from '../Image'
import Navvbar from '../Navvbar'
import Home from '../../home/Home'




const Pages = () => {
  return (
    <>
<Router >
     <div className=' w-full overflow-hidden'> 
      <div className={`${styles.boxWidth} mx-auto`}>
        <Navvbar />
     </div>
     </div>


<Routes>

    <Route exact path ='/' element={<Home/>} />  
    
</Routes>



</Router> 
    </>
  )
}

export default Pages