import dbConnection from '../../util/db'

export default async function handler(req, res) {
  try {
    const result = await dbConnection.promise().query('SELECT * FROM NewTable')
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}