import styles from "./Sidebar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faBuilding, faGamepad, faSitemap ,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function SideBar(){
    return(
    <nav className={styles.sideBar}>
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <div className={styles.logoContent}>
                    <div className={styles.logo}>
                        <img src="/assets/logoHome.png" alt="" />
                    </div>
                    <h1>KumStore</h1>
                </div>
            </div>
            <div className={styles.navigation}>
                <div className={styles.overView}>
                    <h3>OverView</h3>
                    <ul>
                        <Link href={'dashboard'} className={styles.links}>
                            <FontAwesomeIcon icon={faBorderAll} className={styles.icons}/>
                            <li>DashBoard</li></Link>
                        <Link href={'AdicionarJogos'} className={styles.links}>
                            <FontAwesomeIcon icon={faGamepad} className={styles.icons}/>
                            <li>Add Jogo</li></Link>
                        <Link href={'/'} className={styles.links}>
                            <FontAwesomeIcon icon={faSitemap} className={styles.icons}/>
                            <li>Categorias</li></Link>
                        <Link href={'/'} className={styles.links}>
                            <FontAwesomeIcon icon={faBuilding} className={styles.icons} style={{width: "20px"}}/>
                            <li>Empresas</li></Link>
                    </ul>
                </div>
                <div className={styles.overView}>
                    <h3>Empresas Parceiras</h3>
                    <ul>
                        <Link href={'/'} className={styles.links}>
                            <img src="/assets/Nostalgix_logo.svg" alt="" />
                            <li>Nostalgix</li></Link>
                        <Link href={'/'} className={styles.links}>
                            <img src="/assets/Gentix_logo.svg" alt="" />
                            <li>Gentix</li></Link>
                        <Link href={'/'} className={styles.links}>
                            <img src="/assets/DT1_logo.svg" alt="" />
                            <li>DT_</li></Link>
                    </ul>
                </div>
            </div>
            <div className={styles.logout}>
                <h3>Configurações</h3>
                <Link href="/pages/Store">
                    <div className={styles.logoutLogo}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} style={{width: "20px"}} />
                        <p>Sair</p>
                    </div>
                </Link>            
            </div>
        </div>
    </nav>
    )
}