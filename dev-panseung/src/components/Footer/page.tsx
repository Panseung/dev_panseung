import styles from "./page.module.scss"

export default function Footer() {
  return (
    <div className={styles['footer-wrapper']}>
      <div className={styles['footer-left']}>
        ⓒ 2023 Panseung 
      </div>
      <div className={styles['footer-right']}>
        <div className={styles['email']}>📧 jodie9596@gmail.com</div>
        <img src="/github.png" className={styles['github-img']}></img>
      </div>
    </div>
  )
}