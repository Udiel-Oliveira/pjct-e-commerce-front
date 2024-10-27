"use client"
import styles from "../Form/form.module.css"
import React, { useState } from 'react';
import Input from '@/app/components/layout/Form/Input';
import Link from 'next/link';

export default function Form({type, name, placeholder, value, handleOnChange}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ação do formulário aqui
      };
      const [formData, setFormData] = useState({
        country: '',
        email: '',
        name: '',
        password: '',
        termsAccepted: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
  return (
    <>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formContent}>
              <div className={styles.selectContainer}>
                <select 
                  id="country_select" 
                  name="country" 
                  value={formData.country} 
                  onChange={handleChange} 
                  required
                >
                  <option value="" disabled hidden>Escolha seu País</option>
                  <option value="brazil">Brazil</option>
                  <option value="portugal">Portugal</option>
                  {/* Adicione mais opções de país aqui */}
                </select>
              </div>
              <Input 
              handleOnChange={handleChange}
              name="email"
              type="email" 
              required
              value={formData.email}
              placeholder="Endereço de E-mail"
              />
              <Input 
                name="name" 
                type="text" 
                placeholder="Nome ou Nikname" 
                value={formData.name}
                handleOnChange={handleChange} 
                required 
              />
              <Input 
                name="password" 
                type="password" 
                placeholder="Senha" 
                value={formData.password}
                handleOnChange={handleChange}
                required 
              />
            </div>

            <div className={styles.termsSection}>
              <input 
                className={styles.termsInput}
                name="termsAccepted" 
                type="checkbox" 
                id="terms_checkbox"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              <label htmlFor="terms_checkbox" className={styles.checkmark}>
                <Link href="#">
                  <h4>Eu li e concordo com os <strong>Termos de serviço</strong></h4>
                </Link>
              </label>
            </div>

            <button type="submit" className={styles.submitButton}>Continuar</button>
        </form>
    </>
  );
}