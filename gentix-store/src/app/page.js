import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import SignUp from "./pages/SignUp/page";
import NavBar from '@/app/components/layout/Navbar';
//seu gay, a nav ta ali so pra visualização 

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>              
    </div>
  );
}
