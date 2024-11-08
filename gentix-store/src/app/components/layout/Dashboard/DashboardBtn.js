// components/DashboardButton.js
import styles from './dashboardBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function DashboardButton({titulo = "Empresa", icon, icon2}) {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.content}>
        <div className={styles.container}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon 
              icon={icon} 
              className={styles.icons}
            />
          </div>
          <div className={styles.textsContainer}>
            <div>Dashboard</div>
            <h3>{titulo}</h3>
          </div>
        </div>
        <div className={styles.arrowBtn}>
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className={styles.icons}
          />
        </div>
      </button>
    </div>
  );
}