import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/Logo/LogoV2.png'
import PDF from '../assets/Doniyor_s_Resume.pdf'
import './Header.css'

export default function Header() {
  
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className='header'>
            <nav className= "navbar font-Roboto">
                <Link to="#" spy={true} smooth={true} offset={0} duration={500} className='logo'>
                    <img src={logo} alt='logo'className=' h-16 w-16 ' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="About" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Skills" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Skill</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="Project"spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Experience"spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Experience</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Contact"spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                    <li className='nav-item '>
                        <a href={PDF} class="hover:underline">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
  );
}
