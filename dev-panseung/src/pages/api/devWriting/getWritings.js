import dbConnection from '../../../util/db'

export default async function handler(req,res) {
  try {
    const writings = await dbConnection.promise().query('SELECT * FROM \`dev-Panseung\`.dev_writing WHERE not is_deleted')
    return res.status(200).json(writings[0])
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}