const router = require('express').Router()

const usersService = require('./users.services')

router.get('/users', usersService.getAllUsers)
router.post('/users', usersService.postUser)

router.get('/users/:id', usersService.getUserById)
router.patch('/users/:id', usersService.patchUser)
router.delete('/users/:id', usersService.deleteUser)

module.exports = router