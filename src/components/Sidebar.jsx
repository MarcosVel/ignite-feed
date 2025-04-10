import { PencilSimpleLine } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
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
        <Avatar src="https://avatars.githubusercontent.com/u/62637265?v=4" />
        <strong>Username</strong>
        <span>Dev</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine weight="bold" width={20} />
          Editar seu perfil</a>
      </footer>
    </aside>
  );
}
