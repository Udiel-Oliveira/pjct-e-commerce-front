// components/Button.js
"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './btnslide.module.css';
import Link from 'next/link';

export default function BtnSlide({ href, icon, label, isActive }) {
  return (
    <Link href={href}>
      <button className={isActive ? styles.btnActive : styles.btn}>
        <FontAwesomeIcon icon={icon} style={{ fontSize: '20px' }} />
        {label}
      </button>
    </Link>
  );
}