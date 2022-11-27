const express = require('express')
const router = express.Router()
const {register} = require('../Controllers/UserControllers')
const units = require('../Controllers/UnitsController');
//const {UserValidator} = require('../validators/validator')
const createUnit = units.createUnit;
    router.post('/register', register);
router.post('/create-unit', createUnit);
module.exports = router;
