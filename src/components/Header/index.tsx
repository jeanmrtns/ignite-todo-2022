import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="todo logo" />
    </header>
  );
}
