'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import moment from 'moment'
import _ from 'lodash'

type Data = {
  id: number
  title: string
  content: React.ReactNode
  created_time: string
  comment_count: number
  category: string
  matched_color: string
}

export default function Detail() {
  const pathname = usePathname()
  const pathnameList = pathname?.split('/')
  const id = Number(_.last(pathnameList))

  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    if (id) {
      fetchData(id)
    }
  }, [id])

  const fetchData = async (id: number) => {
    try {
      const response = await fetch(`/api/devWriting/getWritingById?id=${id}`)
      const result = await response.json()
      setData(result[0])
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


