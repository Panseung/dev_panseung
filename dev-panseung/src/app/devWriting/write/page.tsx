// base code
'use client'
import styles from "./page.module.scss"
import classNames from "classnames"
import _ from "lodash"

// modules
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

//project files

//data type

export default function WritePage() {
  const isManager :boolean = useSelector((state :object) => _.get(state, 'isManager') || false )
  const router = useRouter()

  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleTitleChange = async function(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  const handleContentChange = async function(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)
  }
  
  const handleSubmit = async function(event: FormEvent<HTMLFormElement>) {

    if ( category == '' ) {
      return alert('카테고리를 선택해주세요.')
    } else if ( title == '' ) {
      return alert('제목을 입력해주세요.')
    } else if ( content == '' ) {
      return alert('글 내용을 입력해주세요.')
    }

    event.preventDefault()
    try {
      await fetch('/api/devWriting/write', {
        method: 'POST',
        body: JSON.stringify({ category, title, content, isManager }),
      })
      router.push('/devWriting')
    } catch (error) {
      console.error(error)
    }
  }

  const [category, setCategory] = useState<string>('CS')

  const categoryOptions = ['CS', 'CSS', 'Front', 'Back', 'JS', 'etc']

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value)
  }
  
  useEffect(() => {
    if (!isManager) {
      alert('관리자만 작성할 수 있습니다.')
      router.push('/devWriting')
    }
  }, [isManager, router])

  return (
    <div className={styles['writePage']}>
      <div className={styles['title']}>글 작성</div>
      <form onSubmit={handleSubmit} method="POST">
      <div className={styles['formGroup']}>
          <label htmlFor="category">카테고리</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            {categoryOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
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
