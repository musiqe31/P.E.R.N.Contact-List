const express = require('express');
const router = express.Router();

const { User } = require('../models')

// /* GET All Users. */
router.get('/users', async function (req, res, next) {
  User.findAll().then((users) => {
    res.send(users)
  }).catch((err) => console.log(err))
});


// /* GET A User. */
router.get('/users/:id', async function (req, res, next) {
  User.findAll({
    where: {
      id: req.params.id
    }
  }).then((users) => {
    res.send(users)
  }).catch((err) => console.log(err))
});

/* CREATE User. */
router.post('/users', async function (req, res, next) {
  console.log("First name " + req.body.firstName + " and age " + req.body.age)
  User.create({
    firstName: req.body.firstName,
    age: req.body.age || 25
  }).catch((err) => res.json({message:err.message}))

  res.json({ message: "User Created!" })
});


// /* UPDATE Users. */
router.put('/users/:id', async function (req, res, next) {
  const user = User.findOne({ where:{id:req.params.id}})
  User.update({
    firstName: req.body.firstName,
    age: req.body.age || user.age
  },
    {
      where: {
        id: req.params.id
      }
    })

  res.send("User Updated!")
});


/* DELETE Users. */
router.delete('/users/:id', async function (req, res, next) {
  console.log("USER TO DELETE " + req.params.id)
  User.destroy({
    where: {
      id: req.params.id
    }
  }).then((users) => {
    res.send("Users Deleted!")
  }).catch((err) => console.log(err))
});

module.exports = router;
