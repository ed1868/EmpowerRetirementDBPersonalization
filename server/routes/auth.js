const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/User')

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt')
const bcryptSalt = 10


// ROUTE TO INPUT RANDOM USER INTO THE DB FOR TESTING   

router.get('/addUsers', (req, res, next) => {
  console.log('ENTROOO');
  let password = 'andrea'
  const salt = bcrypt.genSaltSync(bcryptSalt)
  const hashPass = bcrypt.hashSync(password, salt)
  let roles = ['MasterAdmin', 'SalesAdmin', 'RFPAdmin', 'RFPTeamMember', 'InternalSales', "SalesRep", "DemoUser", "Education"];

  let partnerCodes = ['met', 'wellsFargo', 'empower'];


  const adminUser = {
    username: "Test Admin",
    password: hashPass,
    partner: "EMPOWER",
    email: "admin@gmail.com",
    marketSegment: "Core",
    title: "Project Manager",
    role: 'MasterAdmin',
    partnerCode: "empower",
    permissions: 'MasterAdminPermissions',
    userType: 'empowerAdmin',
  }


  const partnerUser = {
    username: "Test Partner",
    password: hashPass,
    partner: "Metlife",
    email: "partner@gmail.com",
    marketSegment: "Core",
    title: "Project Manager",
    role: 'SalesAdmin',
    partnerCode: "met",
    permissions: 'SalesAdminPermissions',
    userType: 'empowerPartner',
  }


  const empowerAgent = {
    username: "Test Empower Agent",
    password: hashPass,
    partner: "EMPOWER",
    email: "empower@gmail.com",
    marketSegment: "Core",
    title: "Sales Agents",
    role: 'RFPAdmin',
    partnerCode: "empower",
    permissions: 'RFPAdminPermissions',
    userType: 'empowerEmployee',
  }
  const clientUser = {
    username: "Test Client User",
    password: hashPass,
    partner: "Met Life",
    email: "client@gmail.com",
    marketSegment: "Core",
    title: "Consumer",
    role: 'DemoUser',
    partnerCode: "met",
    permissions: 'DemoUserPermissions',
    userType: 'partnerClient',
  }


  let testUsers = [adminUser, clientUser, empowerAgent, partnerUser]

  let randomUser = testUsers[Math.floor(Math.random() * testUsers.length)];
  console.log('THE RANDOM USER BEING SAVED IS :', randomUser);
  const newUser = new User(randomUser)
  newUser.save()

  res.status(200).json({ message: 'You Have succesfully added a new random user' });


});

router.post('/signup', (req, res, next) => {
  const { username, password, partner, email, marketSegment, title, role, partnerCode } = req.body

  if (!username || !password) {
    res.status(400).json({ message: 'Indicate username and password' })
    return
  }
  User.findOne({ username })
    .then(userDoc => {
      if (userDoc !== null) {
        res.status(409).json({ message: 'The username already exists' })
        return
      }
      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(password, salt)
      const newUser = new User({ username, password: hashPass, partner, email, marketSegment, title, role, partnerCode })
      return newUser.save()
    })
    .then(userSaved => {
      // LOG IN THIS USER
      // "req.logIn()" is a Passport method that calls "serializeUser()"
      // (that saves the USER ID in the session)
      req.logIn(userSaved, () => {
        // hide "encryptedPassword" before sending the JSON (it's a security risk)
        userSaved.password = undefined
        res.json(userSaved)
      })
    })
    .catch(err => next(err))
})

router.post('/login', (req, res, next) => {
  const { username, password } = req.body

  // first check to see if there's a document with that username
  User.findOne({ username })
    .then(userDoc => {
      // "userDoc" will be empty if the username is wrong (no document in database)
      if (!userDoc) {
        // create an error object to send to our error handler with "next()"
        next(new Error('Incorrect username '))
        return
      }

      // second check the password
      // "compareSync()" will return false if the "password" is wrong
      if (!bcrypt.compareSync(password, userDoc.password)) {
        // create an error object to send to our error handler with "next()"
        next(new Error('Password is wrong'))
        return
      }

      // LOG IN THIS USER
      // "req.logIn()" is a Passport method that calls "serializeUser()"
      // (that saves the USER ID in the session)
      req.logIn(userDoc, () => {
        // hide "encryptedPassword" before sending the JSON (it's a security risk)
        userDoc.password = undefined
        res.json(userDoc)
      })
    })
    .catch(err => next(err))
})

router.post('/login-with-passport-local-strategy', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' })
      return
    }

    if (!theUser) {
      res.status(401).json(failureDetails)
      return
    }

    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' })
        return
      }

      // We are now logged in (notice req.user)
      res.json(req.user)
    })
  })(req, res, next)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.json({ message: 'You are out!' })
})

module.exports = router
