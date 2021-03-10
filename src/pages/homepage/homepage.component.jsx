import React from 'react';
import './homepage.style.scss';

const HomePage= () => (

<div className ='homepage'>
 <div className ='directory-menu'>
  
  <div className='menu-item'>
    <div className='content'>
     <h1 className='text'>HATS</h1>
     <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
  
  <div className='menu-item'>
    <div className='content'>
     <h1 className='text'>JACKETS</h1>
     <span className='subtitle'>SHOP NOW</span>
    </div>  
  </div>
  
  <div className='menu-item'>
    <div className='content'>
     <h1 className='text'>SNEAKERS</h1>
     <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
  
  <div className='menu-item'>
    <div className='content'>
     <h1 className='text'>WOMENS</h1>
     <span className='subtitle'>SHOP NOW</span>
    </div>
   </div>
   
   <div className='menu-item'>
    <div className='content'>
     <h1 className='text'>MENS</h1>
     <span className='subtitle'>SHOP NOW</span>
    </div>
   </div>
 
 </div>
</div>
)

export default HomePage;