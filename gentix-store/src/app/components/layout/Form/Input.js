import styles from "../Form/input.module.css"

export default function Input({type, name, placeholder, value, handleOnChange}) {
  return (
    <>
        <input type={type} name={name} id={name} placeholder={placeholder} value={value} className={styles.inpuField} onChange={handleOnChange} />
    </>
  );
}