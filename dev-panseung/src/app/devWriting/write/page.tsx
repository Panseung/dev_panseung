'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import styles from './page.module.scss'

export default function WritePage() {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // 글 작성 처리 로직
    console.log('제목:', title)
    console.log('내용:', content)
  }

  return (
    <div className={styles['writePage']}>
      <div className={styles['title']}>글 작성</div>
      <form onSubmit={handleSubmit}>
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
