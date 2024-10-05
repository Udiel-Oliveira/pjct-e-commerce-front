import Link from "next/link"
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
export default function NavBar(){

    return(
        <nav className={styles.nav}>
            

            <ul className={styles.list}>

            <Link href="./SignIn" className={styles.logo}>
                <img src="/assets/logoHome.png" alt="" />
            </Link>

        
            <li className={styles.link}>
                <Link href={"./pages/SignUp"} className={styles.linkItem}>
                    <img src="/assets/Xbox_Icon.svg"/>
                    Jogos
                </Link>
            </li>

            <div className={styles.searchInput}>
                <img src="/assets/lupa.svg" alt=""/>
                <input type="text"
                placeholder="Pesquisar..." 
                />
            </div>

            </ul>
    
            <div className={styles.user}>
            <div>
               <Link href={"./pages/SignUp"} className={styles.linkItem}>
                    <img src="/assets/Store_Icon.svg" alt="" />
                    Loja
               </Link> 
            </div>
            <div>
               <Link href={"./pages/SignUp"} className={styles.linkItem}>
                    <img src="/assets/Biblioteca_Icon.svg" alt="" />
                    Biblioteca
               </Link> 
            </div>

                <Link  href={"./pages/SignUp"}> <FontAwesomeIcon icon={faUser} style={{ width: '23', height: '23' }} /></Link>    
            </div>
            
        </nav>
    )
}