import React from 'react'
import image from "../assets/image.png"
import { Link } from 'react-router-dom'
import Body from './Body'
import Courses from './Courses'
import Contact from './Contact'
const Header = () => {
  return (
    <div className=' bg-red-300 flex justify-between'>
      <img className='h-15 w-15' src={image} alt='Logo'/>
      <div className='flex'>
        <ul className='flex space-x-4'>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/courses" >Courses</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            
        </ul>
      </div>
    </div>
  )
}

export default Header
