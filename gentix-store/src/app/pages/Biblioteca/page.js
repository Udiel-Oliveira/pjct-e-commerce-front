import NavBar from "@/app/components/layout/Navbar";
import styles from "../Biblioteca/biblioteca.module.css"
//seu gay, a nav ta ali so pra visualização 

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Biblioteca | KumStore</title>
      </Head>
      <NavBar/>             
      Biblioteca
    </div>
  );
}