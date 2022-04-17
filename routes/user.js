const { Router } = require('express')
const {
  getUser,
  postUser,
  updatetUser,
  deleteUser,
} = require('../controllers/user')

const router = Router()

router.get('/', getUser)
router.post('/', postUser)
router.put('/:id', updatetUser)
router.delete('/:id', deleteUser)

module.exports = router
