import React from 'react';
import '../CSS/Navbar.css';
import { Logo } from './Logo';

const Navbar = () => {
  return (
    <nav>
      <Logo/>
      <p className = "font-glow-dark">Made with ❤️ by Avinash</p>
    </nav>
  )
}

export default Navbar;