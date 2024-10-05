import NavBar from "@/app/components/layout/Navbar";
import styles from "../Games/games.module.css"
import Head from "next/head";
//seu gay, a nav ta ali so pra visualização 

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Jogos | KumStore</title>
      </Head>
      <NavBar/>             
      Games
    </div>
  );
}