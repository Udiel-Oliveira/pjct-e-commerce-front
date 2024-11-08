"use client";
import Button from "../components/BtnSlide";
import styles from './gameslide.module.css';
import { faDownload, faPlay } from '@fortawesome/free-solid-svg-icons';

export default function GameSlide({ title, description, price, mark, category }) {
  return (
        <div className={styles.swiperContent}>
            <div className={styles.tagsContainer}>
                <span>{category}</span>
                <span>{category}</span>
            </div>

            <div className={styles.infoGame}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <div className={styles.btnActions}>
                <Button href="/" icon={faPlay} label="Saiba Mais" isActive />
                <Button href="/" icon={faDownload} label="Download" />
            </div>
        </div>
  );
}
