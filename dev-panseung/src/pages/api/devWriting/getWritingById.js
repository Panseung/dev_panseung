import dbConnection from '../../../util/db'
import _ from 'lodash'

export default async function handler(req,res) {
  try {    
    const id = _.get(req.query, 'id')
    const writings = await dbConnection.promise().query('SELECT * FROM \`dev-Panseung\`.dev_writing WHERE not is_deleted and id = ?', [id])
    return res.status(200).json(writings[0])
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}