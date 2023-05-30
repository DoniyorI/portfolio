import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/Logo/LogoV2.png'
import './Header.css'

export default function Header() {
  
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className='header'>
            <nav className= "navbar font-Roboto">
                <a href='#' className='logo'>
                    <img src={logo} alt='logo'className=' h-16 w-16 ' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#About' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Skills' onClick={closeMenu}>Skill</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Project' onClick={closeMenu}>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Experience' onClick={closeMenu}>Experience</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Contact' onClick={closeMenu}>Contact</a>
                    </li>
                    <li className='nav-item '>
                        <a href="https://publuu.com/flip-book/149121/373169" class="hover:underline">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
  );
}
