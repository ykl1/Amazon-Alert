var express = require('express');
var router = express.Router();

console.log('auth.js reached');
const {saveuser} = require("../controllers/auth");

router.post('/saveuser', saveuser);

module.exports = router;