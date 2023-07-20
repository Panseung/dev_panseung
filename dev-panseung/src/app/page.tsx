// base code
'use client'
import styles from "./page.module.scss"
import classNames from "classnames"
import _ from "lodash"

// modules

//project files

//data type

export default function Home() {
  return (
    <div className={styles['main-wrapper']}>
      <div className={styles['main-header']}>
        <div className={styles['header-title']}>
          Hi, I{"'"}m seunghwan Kim🖐️
        </div> 
        <div className={styles['header-content']}>
          I{"'"}m a Junior Front-end Engineer.
        </div>
        <div className={styles['header-content']}>
        I worked for 6 months at a POS service company with Vue2,
        <br></br>
        and made a product sales <span>statistics</span> service.📊
        </div>
      </div>
      <div className={styles['main-content']}>
        <div className={styles['content-header']}>
          <span>🚗 My career</span>
        </div>
        <div className={styles['main-box']}>
          <div className={styles['content-item']}>
            <div className={styles['item-title']}>
              MyongJi University
            </div>
            <div className={styles['item-content']}>
              English Language and Literature | 2014.03 ~ 2020.02
            </div>
          </div>
          <div className={styles['content-item']}>
            <div className={styles['item-title']}>
              건강보험공단
            </div>
            <div className={styles['item-content']}>
              급여사업실 인턴 | 2020.07 ~ 2020.12
            </div>
          </div>
          <div className={styles['content-item']}>
            <div className={styles['item-title']}>
              SSAFY 6th
            </div>
            <div className={styles['item-content']}>
              Samsung Software Academy For Youth | 2021.07 ~ 2022.06
            </div>
          </div>
          <div className={styles['content-item']}>
            <div className={styles['item-title']}>
              Let{"'"}s on Clound
            </div>
            <div className={styles['item-content']}>
              Smallbee Project Front Engineer (Vue2) | 2022.11 ~ 2023.4
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
