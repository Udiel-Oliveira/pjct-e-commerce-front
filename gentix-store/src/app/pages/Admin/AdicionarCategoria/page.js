"use client";

import Link from "next/link";
import styles from "./addCategoria.module.css";
import SideBar from '@/app/components/layout/SideBar/SideBar';
import { EntityTable } from '@/app/components/layout/Tables/EntidadeTable';
import { useEntityData } from "@/app/hooks/useEntidadeData";
import Loading from "@/app/components/Load";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import AddCategoryForm from "@/app/components/AddCategoryForm";

export default function AddCategoria() {
  const { 
    data: categories, 
    loading: categoriesLoading, 
    error: categoriesError, 
    addEntity: addCategory 
  } = useEntityData('category');

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (categoriesLoading) {
    return <Loading/>
  }
  


  return (
    <div className={styles.body}>
      <SideBar />
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.formContent}>
            <div className={styles.tipsContainer}>
                <div className={styles.tipsContent}>
                  <p>É aqui onde você pode Adicionar Novas Categorias paras os seus Jogos</p>
                </div>
              </div>
            <AddCategoryForm onCategoryAdded={(newCategory) => console.log(newCategory)}/>
          </div>
          
          <div className={styles.tabela}>
            <EntityTable data={categories} formatDate={formatDate} title={'Ultimas Categorias'}/>
          </div>

        </div>
      </div>
    </div>
  );
}
