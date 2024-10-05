import NavBar from "@/app/components/layout/Navbar";
import styles from "../Games/games.module.css"
//seu gay, a nav ta ali so pra visualização 

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>             
      Games
    </div>
  );
}