import Link from "next/link"
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
export default function NavBar(){

    return(
        <nav className={styles.nav}>


            
                
  
            <div className={styles.links}>
                <div className={styles.logo}>
                <Link href={"./pages/SignUp"}>
            <img src="/assets/logoHome.png" width="35" height="35" margim-Left="2rem" alt="logo-home"></img>
            </Link>
                </div>

            
            <ul className={styles.list}>
            <li ><Link href={"./pages/SignUp"}>Jogos</Link></li>
            <li><Link  href={"./pages/SignUp"}>Loja</Link></li>

            </ul>
            </div>
            <div className={styles.user}>

           <Link  href={"./pages/SignUp"}> <FontAwesomeIcon icon={faUser} style={{ width: '23', height: '23' }} /></Link>
           
        
            </div>
          
            

            


            
          
            
        </nav>
    )
}