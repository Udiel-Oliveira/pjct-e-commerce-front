// app/admin/dashboard/page.js
"use client";

import SideBar from '@/app/components/layout/SideBar/SideBar';
import styles from './dashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DashboardButton from '@/app/components/layout/Dashboard/DashboardBtn';
import { faArrowRight, faBuilding, faGamepad, faSitemap } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useGames } from '@/app/context/GamesContext';

export default function Dashboard() {

  return (
    <div className={styles.body} >
      <SideBar/>
      <div className={styles.page}>
          <div className={styles.container}>
            <div className={styles.latestGamesSlide}>
              <div className={styles.latestContent}>

              </div>

            </div>
            <div className={styles.tipsContainer}>
                <div className={styles.tipsContent}>
                  <p>É aqui onde você pode gerenciar seus jogos para postar na Kumstore</p>
                  <Link href={"AdicionarJogos"} className={styles.btnAddGame}>
                    Cadastre Agora
                    <FontAwesomeIcon 
                    icon={faArrowRight} 
                    />
                  </Link>
                </div>
            </div>
          </div>
          
          <div className={styles.btnContainer}>
            <DashboardButton titulo={"CATEGORIAS"} icon={faSitemap}/>
            <DashboardButton titulo={"EMPRESA"} icon={faBuilding}/>
            <DashboardButton titulo={"JOGOS"}  icon={faGamepad}/>
          </div>
          <div className={styles.tables}>
              <div className={styles.empresasTable}>

              </div>
              <div className={styles.categoriasTable}>

              </div>
          </div>

      </div>
    </div>
  )
}
