import { faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styles from './footer.module.css'

//footer
export default function Footer() {
    return(
      <div className={styles.autors}>
        <div className={styles.autors_title}>
          <div className={styles.itenTitle}>

            <div className={styles.logo}>
            <Link href="https://kumstore.vercel.app/"><img src="/assets/logoHome.png" alt='Logo-Home' className={styles.logo_img} ></img></Link>
              
              <h4 className={styles.txtLinkTitle1}>GenTix Store</h4>
            </div>
            <div className={styles.map}>
            <Link href="https://kumstore.vercel.app" target="_blank"><p className={styles.txtLink} >Loja</p></Link>

            <Link href="" target="_blank"> <p className={styles.txtLink} >Biblioteca</p></Link>

            </div>

          </div>
        </div>

        <div className={styles.autors_title_git}>
          

          <div className={styles.itens}>
            
            <h6 className={styles.color}>Todos os direitos reservados a <Link href="https://kumstore.vercel.app/">GenTix Store - 2024</Link></h6>
            <Link href="https://github.com/Udiel-Oliveira/pjct-e-commerce-front" target="_blank"><FontAwesomeIcon icon={faGithub} className={styles.icon} /></Link>
            
            
          </div> 

        </div>
      </div>
    )
}