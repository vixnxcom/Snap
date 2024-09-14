import React from 'react'
import Navbar from './components/Navbar'
import Pages from './components/pages/Pages'
import Home from './components/Home'

const App = () => {
  return (
    <section className=' overflow-hidden w-full'>
     <div>
      <Pages />

    </div>

     {/* <div>
      <Home />

    </div> */}
    </section>
   
  )
}

export default App