const express = require('express')
const router = express.Router()
const {register,login} = require('../Controllers/UserControllers')
const units = require('../Controllers/UnitsController');
//const {UserValidator} = require('../validators/validator')
const createUnit = units.createUnit;
router.post('/register', register);
router.post('/create-unit', createUnit);
router.post('/login', login);
module.exports = router;
