import React from 'react'

import { Parallax } from 'react-parallax'
import { guide, pic, ppl } from '../../assets';
import Guidingthree from './Guidingthree';




const ParaGuid = () => {


 const imageStyle = {
  // position: 'relative',
  height: '60vh',
  width: '420px',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 marginRight: 'auto',
 marginLeft: 'auto',
zIndex: 2,
borderRadius: '24px',
 overflow: 'visible'
 };




  
  return (
    <div style={{textAlign: 'center', height:'65vh'}}>
<div>

    <Parallax strength={600} 
    bgImage={guide}
    style={{
      position: 'relative',
      height: '70vh',
      width: '420px',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     marginRight: 'auto',
     marginLeft: 'auto',
    zIndex: 1,
    BackgroundPosition: 'center',
    //   overflow: 'visible',
     

    }} 
    >
    
    
      <div style={{position:'absolute', top: '50%', left:'50%', zIndex: 2 , 
      textAlign:'center', transform:'translate(-50%, -50%)', alignItems: 'center', }}>
        <div style={{ imageStyle}}>
         <Guidingthree />
       </div> 
      
      </div>
  
  
</Parallax>
  
</div>
</div>
  );

};

export default ParaGuid