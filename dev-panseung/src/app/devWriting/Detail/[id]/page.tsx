// base code
'use client'
import styles from "./page.module.scss"
import classNames from "classnames"
import _ from "lodash"

// modules
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import moment from 'moment'
import { useSelector } from 'react-redux'

//project files

//data type
type Data = {
  id: number
  title: string
  content: React.ReactNode
  time: string
  comment_count: number
  category: string
  matched_color: string
}

export default function Detail() {
  const pathname = usePathname()
  const pathnameList = pathname?.split('/')
  const id = Number(_.last(pathnameList))

  const [data, setData] = useState<Data | null>(null)

  const categoryColor = {
    'JS': '#f7df1e',
    'CSS': '#0c73b8',
    'CS': '#808080',
    'Front': '#66cdaa',
    'Back': '#bc8f8f',
    'etc': '#334900'
  }

  const fetchData = async (id: number) => {
    try {
      const response = await fetch(`/api/devWriting/getWritingById?id=${id}`)
      let result = await response.json()
      result = result[0]

      const title: string = _.get(result, 'title') || '제목을 불러오지 못했습니다.'
      const content: string = _.get(result, 'content') || '글 내용을 불러오지 못했습니다.'
      const lineBreakedContent = _.map(content.split('\n'), (line, i) => {
        return (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
          )
        })
      const created_time: string = moment(_.get(result, 'created_time')).format('YYYY-MM-DD') || '9999-99-99'
      const modified_time: string = moment(_.get(result, 'modified_time')).format('YYYY-MM-DD') || '9999-99-99'
      const time: string = created_time == modified_time ? '작성시간: ' + created_time : '업데이트 시간: ' + modified_time

      const comment_count: number = _.get(result, 'comment_count') || 0
      const category: string = _.get(result, 'category') || 'etc'
      const matched_color: string = _.get(categoryColor, category) || '#000000'

      result = { id, title, content: lineBreakedContent, time, comment_count, category, matched_color }

      setData(result)
    } catch (error) {
      console.error(error)
    }
  }

  const isManager :boolean = useSelector((state: object) => _.get(state, 'isManager') || false )

  const showDeleteAlarm = function( id: number ) {
    if (window.confirm('삭제하시겠습니까?')) {
      deletData(id)
    }
  }

  const router = useRouter()

  const deletData = async function( id: number ) {
    try {
      await fetch('/api/devWriting/delete', {
        method: 'POST',
        body: JSON.stringify({ id, isManager }),
      })
      router.push(`/devWriting`)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (id) {
      fetchData(id)
    }
  }, [id])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles['writing-item']} key={data.id}>
      <div className={styles['upper-area']}>
        <div className={styles['left-area']}>
          <div className={styles['item-title']}>{ data.title }</div>
          <div className={styles['item-category']} style={{ backgroundColor: data.matched_color }}>{ data.category }</div>
        </div>
        {isManager && (
          <button className={styles['delete-btn']} onClick={() => {showDeleteAlarm(data.id)}}>글삭제</button>
        )}
      </div>
      <div className={styles['item-time']}>{ data.time }</div>
      <div className={styles['item-content']}>{ data.content }</div>
    </div>
  )
}


