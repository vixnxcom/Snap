import React from 'react'
import Navbar from './components/Navbar'
import Pages from './components/pages/Pages'
import Home from './components/Home'
import Variants from './components/Variants'
import Buttonv from './components/Buttonv'
import Personal from './components/Personal'
import Svg from './components/Svg'
import Kitty from './components/Kitty'

const App = () => {
  return (
    <section className=' overflow-hidden w-full'>
     <div>
      <Svg />
      <Kitty />
      <Svg />
      <Kitty />

    </div>

     {/* <div>
      <Home />

    </div> */}
    </section>
   
  )
}

export default App