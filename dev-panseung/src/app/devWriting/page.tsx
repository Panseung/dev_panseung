'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import styles from './page.module.scss'
import { useRouter } from 'next/navigation'
import moment from 'moment'

type Data = {
  id: number
  title: string
  content: string
  created_time: string
  comment_count: number
}

export default function DevWriting() {

  const isManager :boolean = useSelector((state: object) => _.get(state, 'isManager') || false )

  const [datas, setDatas] = useState<Data[]>([])

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('/api/devWriting/getWritings')
      const result = await response.json()
      const parsedData = dataParse(result)
      setDatas(parsedData)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const dataParse = function(rowDatas: object) {
    return _.map( rowDatas, (data, i) => {
      const id: number = _.get(data, 'id') || 99999 + i
      const title: string = _.get(data, 'title') || '제목을 불러오지 못했습니다.'
      const content: string = _.get(data, 'content') || '글 내용을 불러오지 못했습니다.'
      const created_time: string = moment(_.get(data, 'created_time')).format('YYYY-MM-DD') || '9999-99-99'
      const comment_count: number = _.get(data, 'comment_count') || 0
      return { id, title, content, created_time, comment_count }
    } )
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

  useEffect(() => {
    fetchData()
  }, [fetchData])

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
        { datas.length > 0 && datas.map( function( data ) {  // 추후에 로대시 사용해서 변경
          return (
          <div className={styles['writing-item']} key={data.id}>
            <div className={styles['upper-area']}>
              <div className={styles['item-title']}>{ data.title }</div>
              {isManager && (
                <button className={styles['delete-btn']} onClick={() => {showDeleteAlarm(data.id)}}>글삭제</button>
              )}
            </div>
            <div className={styles['item-content']}>{ data.content }</div>
            <div className={styles['item-time']}>{ data.created_time }</div>
          </div>
          )
        } ) }
      </div>
    </div>
  )
}