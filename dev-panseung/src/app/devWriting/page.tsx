'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import styles from './page.module.scss'
import { useRouter } from 'next/navigation'

export default function DevWriting() {

  const isManager :boolean = useSelector((state :object) => _.get(state, 'isManager') || false )

  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async function() {
    try {
      const response = await fetch('/api/devWriting/getWritings')
      const result = await response.json()
      setDatas(result)
    } catch (error) {
      console.error(error)
    }
  }

  const showDeleteAlarm = function( id: number ) {
    if (window.confirm('삭제하시겠습니까?')) {
      deletData(id)
    }
  }

  const deletData = async function( id: number ) {
    try {
      await fetch('/api/devWriting/delete', {
        method: 'POST',
        body: JSON.stringify({ id, isManager }),
      })
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  const router = useRouter()
  const pushWritePage = function () {
    router.push('/devWriting/write')
  }

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
            <button className={styles['write-btn']} onClick={() => {pushWritePage()}}>글작성</button>
          )}
        </div>
      </div>
      <div className={styles['writing-box']}>
        { datas.length > 0 && datas.map( function( data, i ) {  // 추후에 로대시 사용해서 변경
          return (
          <div className={styles['writing-item']} key={i}>
            <div className={styles['upper-area']}>
              <div className={styles['item-title']}>{ _.get(data, 'title') }</div>
              {isManager && (
                <button className={styles['delete-btn']} onClick={() => {showDeleteAlarm(_.get(data, 'id'))}}>글삭제</button>
              )}
            </div>
            <div className={styles['item-content']}>{ _.get(data, 'content') }</div>
            <div className={styles['item-time']}>{ _.get(data, 'created_time') }</div>
          </div>
          )
        } ) }
      </div>
    </div>
  )
}