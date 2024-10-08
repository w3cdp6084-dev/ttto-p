'use client'; 

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../MenuComponent.module.css';

const MenuComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsTransitioning(true);
    setIsMenuOpen(false);
    setTimeout(() => {
      router.push(href);
      setIsTransitioning(false);
    }, 800); // Adjust timing as needed
  };

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Products', link: '/products' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <>
      <button onClick={toggleMenu} className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.menuButtonInner}>
          <div className={styles.menuTextWrapper}>
            <span className={styles.menuText}>Menu</span>
            <span className={styles.menuText}>Close</span>
          </div>
          <div className={styles.menuIconWrapper}>
            <span className={styles.menuIcon}>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className={styles.closeIcon}>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </button>
      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.open : ''}`}>
        <nav className={styles.menuNav}>
          <div className={styles.mklw56m}>
            {menuItems.map((item, index) => (
              <div key={index} className={`${styles.c4szrlw} ${styles.mzur7s3}`}>
                <a 
                  className={styles.i6du1oa} 
                  onClick={() => handleLinkClick(item.link)}
                  style={{cursor: 'pointer'}}
                >
                  <span className={`${styles.bcghuvy} ${styles.l14bodjf}`}>{item.name}</span>
                  <span className={styles.a1f8yy5c} aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default MenuComponent;