import styles from "../../../pages/Admin/admin.module.css"

export function EntityTable({ data, formatDate }) {
    return (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Data de Criação</th>
              <th>Última Atualização</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{formatDate(item.creationDate)}</td>
                <td>{formatDate(item.updateDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }