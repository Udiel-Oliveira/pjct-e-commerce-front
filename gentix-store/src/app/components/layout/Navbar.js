import Link from "next/link"
import styles from './navbar.module.css'

export default function NavBar(){

    return(
        <nav className={styles.NavBar}>

            <div>

            <div>
            <Link href={"./pages/SignUp"}>
            <img src="/assets/logoHome.png" width="30" height="30" alt="logo-home"></img>
            </Link>
            </div>
              
            <ul>
                <li ><Link href={"./pages/SignUp"}>Games</Link></li>
                <li><Link  href={"./pages/SignUp"}>Store</Link></li>
            </ul>
            </div>


            <div>
            <ul>
                <li> <Link  href={"./pages/SignUp"}>Biblioteca</Link></li>
                <li><Link  href={"./pages/SignUp"}>Notificações</Link></li>
                <li><Link  href={"./pages/SignUp"}>User</Link></li>
            </ul>
            </div>
            
        </nav>
    )
}