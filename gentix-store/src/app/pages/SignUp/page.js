"use client"

import { Inter } from 'next/font/google';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './signup.module.css';
import "../../globals.css"

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],  // Adicione os pesos desejados
});  

const SignUp = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ação do formulário aqui
  };

  return (
    <body className={inter.className}>
      <section className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.signInHeader}>
            <img src="/assets/SignUpIcon.svg" alt="Ícone de Cadastro" />
            <h1>Criar Conta</h1>
          </div>
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
              <input 
                name="email" 
                type="email" 
                placeholder="Endereço de E-mail" 
                className={styles.inputField} 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <input 
                name="name" 
                type="text" 
                placeholder="Nome ou Nikname" 
                className={styles.inputField}
                value={formData.name}
                onChange={handleChange} 
                required 
              />
              <input 
                name="password" 
                type="password" 
                placeholder="Senha" 
                className={styles.inputField} 
                value={formData.password}
                onChange={handleChange}
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

          <div className={styles.loginLink}>
            <Link href="./pages/SignIn">
              <h4>Já tem uma conta? <strong>Entrar</strong></h4>
            </Link>
          </div>
        </div>
        <div className={styles.item2}>
          <img src="/assets/Propaganda.svg" alt="Propaganda" id="prop" />
        </div>
      </section>
    </body>
  );
};

export default SignUp;