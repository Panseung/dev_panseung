import dbConnection from '../../../util/db'
import _ from 'lodash'
import moment from 'moment'

export default async function handler(req, res) {
  const body = JSON.parse(req.body)
  const isManager = _.get(body, 'isManager')
  
  if (req.method === 'POST' && isManager ) {
    const writer = '승환'
    const category = _.get(body, 'category')
    const title = _.get(body, 'title')
    const content = _.get(body, 'content')
    const created_time = moment().format('YYYY-MM-DD HH:mm:ss')
    const modified_time = moment().format('YYYY-MM-DD HH:mm:ss')
    const comment_count = 0
    const is_deleted = 0

    try {
      // 쿼리문 실행
      const query = `
        INSERT INTO \`dev-Panseung\`.dev_writing (writer, category, title, content, created_time, modified_time, comment_count, is_deleted)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `
      dbConnection.execute(query, [writer, category, title, content, created_time, modified_time, comment_count, is_deleted])
      // 응답
      return res.status(200).json({ message: '데이터 입력 성공' })
    } catch (error) {
      console.error('데이터 입력 실패:', error)
      return res.status(500).json({ message: '데이터 입력 실패' })
    }
  } else {
    return res.status(405).json({ message: '허용되지 않는 메소드입니다.' })
  }
}
