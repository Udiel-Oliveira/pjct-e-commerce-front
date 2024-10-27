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
                <h3>GenTix Store</h3>
                <p className={styles.txtSub} >Investimentos legais</p>
                <p className={styles.txtSub} >Investimentos legais</p>

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