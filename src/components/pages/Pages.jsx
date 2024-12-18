import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../navbar'
import styles from '../../style'
import HeroImage from '../Image'




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

    <Route exact path ='/' element={<HeroImage />} />  
    
</Routes>



</Router> 
    </>
  )
}

export default Pages