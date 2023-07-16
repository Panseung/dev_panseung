import dbConnection from '../../../util/db'
import _ from 'lodash'

export default async function handler(req, res) {
  const body = JSON.parse(req.body)
  const isManager = _.get(body, 'isManager')
  
  if (req.method === 'POST' && isManager ) {
    try {
      // 쿼리문 실행
      const id = _.get(body, 'id')
      const query = `
        UPDATE \`dev-Panseung\`.dev_writing SET is_deleted = 1 WHERE id = ?
      `
      dbConnection.execute(query, [id])
      // 응답
      res.status(200).json({ message: '데이터 삭제 성공' })
    } catch (error) {
      console.error('데이터 입력 실패:', error)
      res.status(500).json({ message: '데이터 삭제 실패' })
    }
  } else {
    res.status(405).json({ message: '허용되지 않는 메소드입니다.' })
  }
}
