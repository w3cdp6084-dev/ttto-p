'use client'

import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import gsap from 'gsap'
import MenuComponent from './MenuComponent'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      gsap.to('.menu-icon', { rotate: 0, duration: 0.3 })
      gsap.to('.menu-items', { opacity: 0, y: -20, duration: 0.3 })
    } else {
      gsap.to('.menu-icon', { rotate: 90, duration: 0.3 })
      gsap.to('.menu-items', { opacity: 1, y: 0, duration: 0.3 })
    }
  }

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="menu-wrapper" onClick={toggleMenu}>
        <GiHamburgerMenu className="menu-icon" />
        <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          {/* ここにメニュー項目を追加 */}
        </div>
      </div>
      <MenuComponent />
    </header>
  )
}

export default Header