"use client";

import { useState, useCallback } from "react";
import styles from "./addEmpresa.module.css";
import SideBar from '@/app/components/layout/SideBar/SideBar';
import { EntityTable } from '@/app/components/layout/Tables/EntidadeTable';
import { useEntityData } from "@/app/hooks/useEntidadeData";
import Loading from "@/app/components/Load";

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

  const handleFormChange = useCallback((data) => {
    setPreviewData({
      title: data.title || 'Nome do Jogo',
      price: data.price || 0,
      category: data.category,
      image: data.image
    });
  }, []);

  if (marksLoading) {
    return <Loading/>
  }
  


  return (
    <div className={styles.body}>
      <SideBar />
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.formContent}>
            opa
          </div>
          
          <div className={styles.tabela}>
            <EntityTable data={marks} formatDate={formatDate} title={'Empresas'}/>
          </div>

        </div>
      </div>
    </div>
  );
}
