'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.scss'
export default function DevWriting() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const response = await fetch('/api/test');
      const result = await response.json();
      console.log(result)
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles['dev-writing-wrapper']}>
      여기는 데브라이팅
    </div>
  )
}