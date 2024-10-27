import { Inter } from 'next/font/google';
import Link from 'next/link';
import styles from './signup.module.css';
import "../../globals.css"
import Form from '@/app/components/layout/Form/Form';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});  

const SignUp = () => {

  return (
    <body className={inter.className}>
      <section className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.signInHeader}>
            <img src="/assets/SignUpIcon.svg" alt="Ícone de Cadastro" />
            <h1>Criar Conta</h1>
          </div>
            <Form/>
          <div className={styles.loginLink}>
            <Link href="./SignIn">
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