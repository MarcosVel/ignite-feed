import styles from './Avatar.module.css';

export function Avatar({ src }) {
  return (
    <img
      src={src}
      className={styles.avatar}
      alt="user avatar"
    />
  )
}
