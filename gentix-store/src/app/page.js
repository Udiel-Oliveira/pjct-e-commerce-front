import styles from "./page.module.css";
import NavBar from '@/app/components/layout/Navbar';
import Footer from "./components/layout/Footer";
import SideBar from "./components/layout/SideBar/SideBar";
//seu gay, a nav ta ali so pra visualização 

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
      <SideBar/>
      <div className={styles.page}>

      </div>
    </div>
  );
}
