const { request, response } = require('express')

const getUser = (req = request, res = response) => {
  const query = req.query

  res.send({
    message: 'get request jiji',
    query,
  })
}

const postUser = (req, res) => {
  const { name, age } = req.body

  res.send({
    message: 'post request jojo',
    name,
    age,
  })
}

const updatetUser = (req, res) => {
  const { id } = req.params

  res.send({
    message: 'post request jojo',
    id,
  })
}
const deleteUser = (req, res) => {
  res.send({
    message: 'post request jojo',
  })
}

module.exports = {
  getUser,
  postUser,
  updatetUser,
  deleteUser,
}
