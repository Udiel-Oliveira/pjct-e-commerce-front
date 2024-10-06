"use client"; // Adicione esta linha no início do arquivo

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowUpRightFromSquare, 
  faCaretDown, 
  faUser, 
  faBagShopping,
  faBookOpen 
} from '@fortawesome/free-solid-svg-icons';
import { faXbox } from '@fortawesome/free-brands-svg-icons';

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
            <FontAwesomeIcon 
              icon={faCaretDown}
              style={{         
                fontSize: '25px',    
                transition: 'transform 0.3s',
                color: '#fff',
                transform: isSubMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </Link>
          {isSubMenuOpen && (
            <ul className={styles.subMenu}>
              <h1>Empresas Parceiras</h1>
              <li>
                <Link href="/pages/SignIn" target="_blank" className={styles.subItem}>
                  <div>
                    <img src="/assets/Nostalgix_logo.svg" alt="Nostalgix" />
                    <span className={styles.text}>Nostalgix</span>
                  </div>
                  <FontAwesomeIcon className={styles.icons} icon={faArrowUpRightFromSquare} />
                </Link>
              </li>
              <li>
                <Link href="https://www.microsoft.com/en-us/about" target="_blank" className={styles.subItem}>
                  <div>
                    <img src="/assets/DT1_logo.svg" alt="DT1" />
                    <span className={styles.text}>DT1</span>
                  </div>
                  <FontAwesomeIcon className={styles.icons} icon={faArrowUpRightFromSquare} />
                </Link>
              </li>
              <li>
                <Link href="https://nextjs.org/conf" target="_blank" className={styles.subItem}>
                  <div>
                    <img src="/assets/Gentix_logo.svg" alt="Gentix" />
                    <span className={styles.text}>Gentix</span>
                  </div>
                  <FontAwesomeIcon className={styles.icons} icon={faArrowUpRightFromSquare} />
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className={styles.link}>
          <Link href="/" className={styles.linkItem}>
            <div className={styles.iconConteiner}>
              <FontAwesomeIcon icon={faXbox} className={`${styles.linkIcons} ${currentRoute === '/' ? styles.activeLink : ''}`}/>
              {currentRoute === '/' && (
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
          <Link href="/pages/Store" className={`${styles.linkItem} ${currentRoute === '/pages/Store' ? styles.activeLink : ''}`}>
            <div className={styles.iconConteiner}>
              <FontAwesomeIcon icon={faBagShopping} className={`${styles.linkIcons} ${currentRoute === '/pages/Store' ? styles.activeLink : ''}`}/>
              {currentRoute === '/pages/Store' && <span className={styles.activeDot}></span>}
            </div>
            Loja
          </Link>
        </div>
        <div>
          <Link href="/pages/Biblioteca" className={`${styles.linkItem} ${currentRoute === '/pages/Biblioteca' ? styles.activeLink : ''}`}>
            <div className={styles.iconConteiner}>
              <FontAwesomeIcon icon={faBookOpen} className={`${styles.linkIcons} ${currentRoute === '/pages/Biblioteca' ? styles.activeLink : ''}`}/>
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
