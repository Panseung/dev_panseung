// base code
'use client'
import styles from "./page.module.scss"
import classNames from "classnames"
import _ from "lodash"

// modules
import { useState } from "react"

//project files
import Image from "next/image"

//data type

export default function Footer() {
  const cn = classNames.bind(styles)

  let [showCopyAlarm, setShowCopyAlarm] = useState(false)

  const onClickEmail = () => {
    setShowCopyAlarm(true)
    setTimeout(() => {
      setShowCopyAlarm(false)
    }, 1000)
    window.navigator.clipboard.writeText('jodie9596@gmail.com')
  }

  return (
    <div className={styles['footer-wrapper']}>
      <div className={styles['footer-left']}>
        ⓒ 2023 Panseung
      </div>
      <div className={styles['footer-right']}>
        <div className={styles['email']} onClick={() => {onClickEmail()}}>
          📧 jodie9596@gmail.com
          <div className={cn(styles['copy-text'], showCopyAlarm ? styles['show'] : '')}>
            복사되었습니다.
          </div>
        </div>
        <Image src="/github.png" className={styles['github-img']}
               width={250} height={250} alt="깃헙 이미지"
               onClick={() => {window.open("https://github.com/Panseung")}}/>
      </div>
    </div>
  )
}