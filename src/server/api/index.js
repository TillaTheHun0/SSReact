
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.json({ data: 'Sweet API!' }))

export default router
