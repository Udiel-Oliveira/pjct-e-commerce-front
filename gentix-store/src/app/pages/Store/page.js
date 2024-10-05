import NavBar from "@/app/components/layout/Navbar";
import styles from "../Store/store.module.css"
import Head from "next/head";
//seu gay, a nav ta ali so pra visualização 

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Loja | KumStore</title>
      </Head>
      <NavBar/>             
      Store
    </div>
  );
}