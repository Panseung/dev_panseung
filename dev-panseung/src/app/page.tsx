import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles['main-wrapper']}>
      <div className={styles['main-header']}>
        <div className={styles['header-title']}>
          Hi, I'm seunghwan Kim🖐️
        </div> 
        <div className={styles['header-content']}>
          I'm a Junior Front-end Engineer.
        </div>
        <div className={styles['header-content']}>
        I worked for 6 months at a POS service company with Vue2,
        <br></br>
        and made a product sales statistics service.📊
        </div>
      </div>
    </div>
  )
}
