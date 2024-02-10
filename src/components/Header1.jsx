import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'




function Header1() {
  return (
   
      
      <div>
        <div className='header'>
            <div><i class="fa-solid fa-bolt hitem1 fa-2x"></i><span className='text1'>ClimateCompose</span></div>
            <button className='btn btn-primary hitem2'><Link to={'/register'} style={{color:'white',textDecoration:'none'}}>Login Here</Link></button>
        </div>
      </div>
    
   
  )
}

export default Header1