"use client"

import React, { useState } from "react";
import styles from "./signIn.module.css";
import Link from "next/link";

const SignIn = () => {
  const [emaill, setEmail] = useState('')
  const [senhaa, setSenha] = useState('')

    return (
      <section className={styles.loginSection}>
        <div className={styles.item2}>
          <img src="/assets/Propaganda2.svg" id="prop" alt="Propaganda contendo vários jogos, Minecraft, Pokemon, Super Mario Bros" />
        </div>
        <div className={styles.loginContainer}>
          <div className={styles.loginHeader}>
            <img src="/assets/EntrarIcon.svg" alt="Ícone de Entrar" />
            <h1>Entrar</h1>
          </div>
          <form className={styles.form}>
            <div className={styles.formContent}>
              <input
                id={emaill}
                name="email"
                type="email"
                placeholder="Endereço de E-mail"
                className={styles.inputField}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              <input
                id={senhaa}
                name="senha"
                type="password"
                placeholder="Senha"
                onChange={(e)=>setSenha(e.target.value)}
                className={styles.inputField}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Continuar
            </button>
            <br />
            <span style={{ display: 'flex', justifyContent: 'center', fontSize: '20px' }}>
              Ou
            </span>
            <br />
            <div className={styles.googleContainer}>
              <Link href={"/"}>
                <button className={styles.googleLogin}>
                  <img src="/assets/Google_icon.svg" alt="Logo do Google" />
                  <h4>Continuar com o Google</h4>
                </button>
              </Link>
            </div>
          </form>
  
          <div id={styles.signupLink}>
            <Link href="./SignUp">
              <h4>Não tem uma conta? <strong>Criar</strong></h4>
            </Link>
          </div>
        </div>
        
      </section>
    );
  };
  
  export default SignIn;