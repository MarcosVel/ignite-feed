import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://avatars.githubusercontent.com/u/62637265?v=4"
        className={styles.cover}
        alt="cover"
      />
      <div className={styles.profile}>
        <strong>Username</strong>
        <span>Dev</span>

        <footer>
          <a href="#">Editar seu perfil</a>
        </footer>
      </div>
    </aside>
  );
}
