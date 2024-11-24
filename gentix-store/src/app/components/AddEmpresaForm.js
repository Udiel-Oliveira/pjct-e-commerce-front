// components/AddCategoryForm.js
"use client";
import { useState } from 'react';
import { empresaService } from '@/api/empresa';
import styles from './addCategoryForm.module.css';

export default function AddEmpresaForm({onEmpresaAdded}) {
  const [empresaName, setEmpresaName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const newEmpresa = await empresaService.addEmpresa({ name: empresaName });
      onEmpresaAdded(newEmpresa);
      setEmpresaName('');
      setSuccess('Empresa adicionada com sucesso!');
    } catch (error) {
      setError(error.message);
      alert(`Erro ao adicionar Empresa: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Adicionar Nova Empresa</h2>
      
      <div className={styles.formGroup}>
        <label htmlFor="empresaName" className={styles.label}>Nome da Empresa</label>
        <input
          type="text"
          id="empresaName"
          value={empresaName}
          onChange={(e) => setEmpresaName(e.target.value)}
          required
          className={styles.input}
          placeholder="Digite o nome da Sua empresa"
        />
      </div>

      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}

      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? 'Adicionando...' : 'Adicionar Empresa'}
      </button>
    </form>
  );
}