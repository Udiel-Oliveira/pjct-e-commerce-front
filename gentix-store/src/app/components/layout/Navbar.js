"use client"; // Adicione esta linha no início do arquivo

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function NavBar() {
  const currentRoute = usePathname(); 
  const [isSubMenuOpen, setSubMenuOpen] = useState(false); 

  const toggleSubMenu = () => {
    setSubMenuOpen((prev) => !prev); 
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>

        <li className={styles.logoContainer}>
            <Link href="#" className={styles.logo} onClick={toggleSubMenu}>
                <img src="/assets/logoHome.png" alt="" />
                <img style={{
                width: '20px',
                height: '20px',
                transition: 'transform 0.3s', // Adiciona uma transição suave
                transform: isSubMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', // Rotaciona a seta
              }} src="/assets/Arrow.svg" alt="" />
            </Link>
            {isSubMenuOpen && (
                <ul className={styles.subMenu}>
                <h1>Empresas Parceiras</h1>
                <li>
                    <Link href="#" className={styles.subItem}>
                    <img src="/assets/Nostalgix_logo.svg" alt="Nostalgix" />
                    <span className={styles.text}>Nostalgix</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className={styles.subItem}>
                    <img src="/assets/DT1_logo.svg" alt="DT1" />
                    <span className={styles.text}>DT1</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className={styles.subItem}>
                    <img src="/assets/Gentix_logo.svg" alt="Gentix" />
                    <span className={styles.text}>Gentix</span>
                    </Link>
                </li>
                </ul>
            )}
            </li>
            
        <li className={styles.link}>
          <Link href="/" className={styles.linkItem}>
          <div className={styles.iconConteiner}>
            <img src="/assets/Xbox_Icon.svg" />
            {(currentRoute === '/' || currentRoute === '/') && (
              <span className={styles.activeDot}></span>
            )}
          </div>
            Jogos
          </Link>
        </li>

        <div className={styles.searchInput}>
          <img src="/assets/lupa.svg" alt="" />
          <input type="search" placeholder="Pesquisar..." />
        </div>
      </ul>

      <div className={styles.user}>
        <div>
          <Link href="/pages/Store" className={styles.linkItem}>
            <div className={styles.iconConteiner}>
                <img src="/assets/Store_Icon.svg" alt="" />
                {currentRoute === '/pages/Store' && <span className={styles.activeDot}></span>}
            </div>
            Loja
          </Link>
        </div>
        <div>
          <Link href="/pages/Biblioteca" className={styles.linkItem}>
            <div className={styles.iconConteiner}>
                <img src="/assets/Biblioteca_Icon.svg" alt="" />
                {currentRoute === '/pages/Biblioteca' && <span className={styles.activeDot}></span>}
            </div>
            Biblioteca
          </Link>
        </div>

        <Link className={styles.userImage} href="/pages/SignUp">
          <FontAwesomeIcon icon={faUser} style={{ width: '23px', height: '23px' }} />
        </Link>
      </div>
    </nav>
  );
}
