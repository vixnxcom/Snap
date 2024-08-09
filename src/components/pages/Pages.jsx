import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'
import Home from '../home/Home'
import About from '../about/About'
import Footer from '../Footer'
import ScrollTop from '../ScrollTop'
import styles from '../../style'

import Loader from '../home/Loader'
import Services from '../services/Services'
import Register from '../../Register'


const LazyAbout = React.lazy(() => import('../about/About'))
const LazyService = React.lazy(() => import('../services/Services'))
const LazyContact = React.lazy(() => import('../contact/Contact'))
const LazyRegister = React.lazy(() => import('../../Register'))

const Pages = () => {
  return (
    <>
<Router >
     <div className=' w-full overflow-hidden'> 
        <Navbar />
     </div>


<Routes>

    <Route exact path ='/' element={<Home />} />  
    <Route exact path ='/about' element={<React.Suspense fallback={<div><Loader /></div>}><LazyAbout /></React.Suspense>} />  
    <Route exact path ='/service' element={<React.Suspense fallback={<div><Loader /></div>}><LazyService /></React.Suspense>} />  
    <Route exact path ='/contact' element={<React.Suspense fallback={<div><Loader /></div>}><LazyContact /></React.Suspense>} />  
    <Route exact path ='/register' element={<React.Suspense fallback={<div><Loader /></div>}><LazyRegister /></React.Suspense>} />  
  

</Routes>
<div className={`${styles.boxWidth} `}>
            < ScrollTop />
           </div>  


<div className='bg-black h-[650px]'>
        <div className=''>
          <Footer />
        </div>
       </div>


</Router> 
    </>
  )
}

export default Pages