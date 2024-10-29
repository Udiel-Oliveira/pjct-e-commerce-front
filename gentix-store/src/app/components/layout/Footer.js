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
                <img src="/assets/logoHome.png" alt='Logo-Home' className={styles.logo_img} ></img>
                <h4 className={styles.txtLinkTitle1}>GenTix Store</h4>
              </div>
              <div className={styles.map}>
                <h3 className={styles.txtLinkTitle2}>Jogos feito pela Nostalgix</h3> 
              <p className={styles.txtLink} >Investimentos legais</p>
              <p className={styles.txtLink} >Investimentos legais</p>
              <p className={styles.txtLink} >Investimentos legais</p>
              </div>


                    </div>





                </div>
                <div className={styles.autors_title_git}>

                <div className={styles.itens}>
                <h6>Todos os direitos reservados a GenTIx - 2024</h6>
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                </div> 

                </div>


                

            </div>
    )
}