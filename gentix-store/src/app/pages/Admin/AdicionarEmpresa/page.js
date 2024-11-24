"use client";

import styles from "./addEmpresa.module.css";
import SideBar from '@/app/components/layout/SideBar/SideBar';
import { EntityTable } from '@/app/components/layout/Tables/EntidadeTable';
import { useEntityData } from "@/app/hooks/useEntidadeData";
import Loading from "@/app/components/Load";
import AddEmpresaForm from "@/app/components/AddEmpresaForm";

export default function AddEmpresa() {
  const {
    data: marks,
    loading: marksLoading,
    error: marksError,
    addEntity: addMark
  } = useEntityData('mark')

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (marksLoading) {
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
                  <p>É Aqui que voce Pode Cadastrar sua Empresa Pra Fazer parte da KumStore!!</p>
                </div>
              </div>
            <AddEmpresaForm onEmpresaAdded={(newEmpresa) => console.log(newEmpresa)}/>
          </div>
          
          <div className={styles.tabela}>
            <EntityTable data={marks} formatDate={formatDate} title={'Ultimas Empresas Cadastradas'}/>
          </div>

        </div>
      </div>
    </div>
  );
}
