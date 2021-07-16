// build your `/api/tasks` router here
const router = require('express').Router()
const Tasks = require('./model')


router.post('/', (req, res, next) => {
   console.log('hello')
})
router.get('/', (req, res, next) => {
   console.log('hello')
})


module.exports = router