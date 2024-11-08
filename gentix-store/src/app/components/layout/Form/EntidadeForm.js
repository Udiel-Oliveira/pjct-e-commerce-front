import { useState } from "react";
import styles from "../../../pages/Admin/admin.module.css"

export function EntityForm({ entityName, onSubmit }) {
    const [name, setName] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await onSubmit(name);
      setName('');
    };
  
    return (
        <form onSubmit={handleSubmit} className={styles.entityForm}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={`Nome da nova ${entityName.toLowerCase()}`}
            required
            className={styles.entityFormInput}
          />
          <button type="submit" className={styles.primaryButton}>
            Adicionar {entityName}
          </button>
        </form>
      );
    }
  
  // components/tables/EntityTable.js
