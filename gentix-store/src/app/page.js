import styles from "./page.module.css";
import NavBar from '@/app/components/layout/Navbar';
//seu gay, a nav ta ali so pra visualização 

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>              
    </div>
  );
}
