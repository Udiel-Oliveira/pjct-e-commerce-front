import styles from './load.module.css'

export default function Loading(){
    return <div className={styles.pageLoading}>
      <img src="/assets/Loading.gif" alt="" />
      <p>CARREGANDO</p>
    </div>;
}