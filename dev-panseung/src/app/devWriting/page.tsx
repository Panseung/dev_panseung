'use client'
import styles from './page.module.scss'

export default function DevWriting() {

  function test() {
    fetch('database-dev-panseung.ceykodjlbme3.ap-northeast-2.rds.amazonaws.com')
    .then(res => res.json)
    .then(data => console.log(data))
  }


  return (
    <div className={styles['dev-writing-wrapper']}>
      여기는 데브라이팅
      <button onClick={test}>
        test
      </button>
    </div>
  )
}