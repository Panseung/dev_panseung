'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'

export default function WritePage() {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleTitleChange = async function(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  const handleContentChange = async function(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)
  }
  
  const router = useRouter()
  const handleSubmit = async function(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await fetch('/api/devWriting/write', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
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
