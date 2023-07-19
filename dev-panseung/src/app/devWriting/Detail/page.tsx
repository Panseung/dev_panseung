'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'

type Data = {
  id: number
  title: string
  content: React.ReactNode
  created_time: string
  comment_count: number
  category: string
  matched_color: string
}

const Detail = () => {
  const router = useRouter()
  const { id } = router.query

  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    if (id) {
      fetchData(id)
    }
  }, [id])

  const fetchData = async (id: string | string[]) => {
    try {
      const response = await fetch(`/api/devWriting/getWriting/${id}`)
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error(error)
    }
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <p>Created Time: {moment(data.created_time).format('YYYY-MM-DD')}</p>
    </div>
  )
}

export default Detail
