"use client";

import SideBar from '@/app/components/layout/SideBar/SideBar';
import styles from './dashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DashboardButton from '@/app/components/layout/Dashboard/DashboardBtn';
import { faArrowRight, faBuilding, faGamepad, faSitemap } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { EntityTable } from '@/app/components/layout/Tables/EntidadeTable';
import { useEntityData } from '@/app/hooks/useEntidadeData';
import Loading from '@/app/components/Load';

export default function Dashboard() {

  const {
    data: marks,
    loading: marksLoading,
    error: marksError,
    addEntity: addMark
  } = useEntityData('mark')

  const { 
    data: categories, 
    loading: categoriesLoading, 
    error: categoriesError, 
    addEntity: addCategory 
  } = useEntityData('category');

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (marksLoading || categoriesLoading) {
    return <Loading/>
  }

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
            <DashboardButton titulo={"CATEGORIAS"} icon={faSitemap} link='AdicionarCategoria' />
            <DashboardButton titulo={"EMPRESA"} icon={faBuilding} link='AdicionarEmpresa'/>
            <DashboardButton titulo={"JOGOS"}  icon={faGamepad} link='AdicionarJogos'/>
          </div>
          <div className={styles.tables}>
              <div className={styles.empresasTable}>
                  <EntityTable data={marks} formatDate={formatDate} title={'Empresas'}/>
              </div>
              <div className={styles.categoriasTable}>
                  <EntityTable data={categories} formatDate={formatDate} title={'Categorias'}/>
              </div>
          </div>

      </div>
    </div>
  )
}
