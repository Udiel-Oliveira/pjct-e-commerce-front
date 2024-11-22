'use client'

import styles from "./tables.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export function EntityTable({ data, formatDate, title, link }) {
    return (
        <table className={styles.table}>
          <div className={styles.titleTable}>
              <h1>{title}</h1>
              <Link href={{link}} className={styles.arrowBtn}>
                <FontAwesomeIcon 
                icon={faArrowRight} 
                className={styles.icons}
                />
              </Link>
          </div>
          <thead className={styles.cabecalho}>
            <tr className={styles.trCabecalho}>
              <th>ID</th>
              <th>Nome</th>
              <th>Data de Criação</th>
              <th>Última Atualização</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {data.map((item) => (
              <tr key={item.id} className={styles.trBody}>
                <td>{item.id}</td>
                <td><div className={styles.backTag}>{item.name}</div></td>
                <td>{formatDate(item.creationDate)}</td>
                <td>{formatDate(item.updateDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }