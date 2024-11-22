import NavBar from "@/app/components/layout/NavBar/Navbar";
import styles from "../Biblioteca/biblioteca.module.css"
import Footer from "@/app/components/layout/Footer/Footer";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className={styles.page}>
        <h4  className={styles.title}>Meus jogos</h4>
      </div>
    <Footer/>
    </div>

    
  );
}