"use client";

import React, { useState } from "react";
import Link from 'next/link';
import styles from "./signIn.module.css";
import { useAuth } from "@/app/context/AuthContext";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(userName, password);
    } catch (err) {
      setError(err.message || "Erro ao fazer login");
    }
  };

  return (
    <section className={styles.page}>
      <div className={styles.item2}>
        <img src="/assets/Propaganda2.svg" alt="Propaganda contendo vários jogos" id="prop" />
      </div>
      
      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}
      
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <img src="/assets/EntrarIcon.svg" alt="Ícone de Entrar" />
          <h1>Entrar</h1>
        </div>
        
        <form className={styles.form} onSubmit={handleSignIn}>
          <div className={styles.formContent}>
            <input
              type="text"
              placeholder="Nome ou Nickname"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className={styles.inputField}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Continuar</button>
        </form>
        
        <div id={styles.signupLink}>
          <h4>Não tem uma conta? <Link href="./SignUp"><strong>Criar</strong></Link></h4>
          <h4><Link href="./Store"><strong>entrar na loja</strong></Link></h4>
        </div>
      </div>
    </section>
  );
};

export default SignIn;