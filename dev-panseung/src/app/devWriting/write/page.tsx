'use client'

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'
import { useSelector } from 'react-redux'
import _ from 'lodash'

export default function WritePage() {
  const isManager :boolean = useSelector((state :object) => _.get(state, 'isManager') || false )
  const router = useRouter()

  useEffect(() => {
    if (!isManager) {
      alert('관리자만 작성할 수 있습니다.')
      router.push('/devWriting')
    }
  }, [])

  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleTitleChange = async function(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  const handleContentChange = async function(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)
  }
  
  const handleSubmit = async function(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await fetch('/api/devWriting/write', {
        method: 'POST',
        body: JSON.stringify({ title, content, isManager }),
      })
      router.push('/devWriting')


    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles['writePage']}>
      <div className={styles['title']}>글 작성</div>
      <form onSubmit={handleSubmit} method="POST">
        <div className={styles['formGroup']}>
          <label htmlFor="title">제목</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div className={styles['formGroup']}>
          <label htmlFor="content">내용</label>
          <textarea id="content" value={content} onChange={handleContentChange} />
        </div>
        <button type="submit">작성 완료</button>
      </form>
    </div>
  )
}
