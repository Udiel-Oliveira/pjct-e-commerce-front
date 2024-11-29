'use client';

import styles from "./page.module.css";
import NavBar from '@/app/components/layout/NavBar/Navbar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {

    router.push('/pages/Store');
  }, [router]);

  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.page}>
        {}
      </div>
    </div>
  );
}