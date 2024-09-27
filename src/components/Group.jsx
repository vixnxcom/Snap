import React from 'react'

const Group = () => {
  return (
<div className='flex flex-col gap-10 overflow-x-hidden'>
       <section className='flex flex-row gap-10 p-10'>
       <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
       <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div> 
       </section>
       <section className='flex flex-row gap-10 p-10'>
       <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
       <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div> 
       </section>
       <section className='flex flex-row gap-10 p-10'>
       <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
       <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div> 
       </section>
   
    </div>
  )
}

export default Group
