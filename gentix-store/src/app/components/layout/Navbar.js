"use client"

// Navbar.js
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  const currentRoute = usePathname(); // Obter a rota atual com usePathname

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <Link href="/pages/SignIn" className={styles.logo}>
          <img src="/assets/logoHome.png" alt="" />
        </Link>

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
