'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import styles from './page.module.scss'
import moment from 'moment'

export default function DevWriting() {

  let isManager :boolean = useSelector((state :object) => _.get(state, 'isManager') || false )

  console.log( '매니저: ', isManager)

  const [data, setData] = useState([])

  useEffect(() => {
    // fetchData()
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
  
  const datas = [
    { title: '테스트 타이틀 1',
      content: '테스트 내용 1',
      time: moment().calendar() }, 
    { title: '테스트 타이틀 2',
      content: '테스트 내용 2',
      time: moment().format("MMM Do YY") }, 
  ]

  return (
    <div className={styles['dev-writing-wrapper']}>
      <div className={styles['writing-header']}>
        <div className={styles['title']}>
          Dev Writing
        </div> 
        <div className={styles['content']}>
          I mainly write about development learning
        </div> 
        <div>
          {isManager && (
            <button>글 작성</button>
          )}
        </div>
      </div>
      <div className={styles['writing-box']}>
        { datas.map( function( data, i ) {
          return (
          <div className={styles['writing-item']} key={i}>
            <div className={styles['item-title']}>{ data.title }</div>
            <div className={styles['item-content']}>{ data.content }</div>
            <div className={styles['item-time']}>{ data.time }</div>
          </div>
          )
        } ) }
      </div>
    </div>
  )
}