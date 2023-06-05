import Head from 'next/head'
import styles from './page.module.scss'

export default function timeArchive() {
  return (
    <>
    <Head>
      <title>hoih</title>
    </Head>
    <div className={styles['time-archive-wrapper']}>
      여기는 타임 아카이브
    </div>
    </>
  )
}