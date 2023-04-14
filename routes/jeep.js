var express = require('express');
var router = express.Router();
const Jeep_controlers= require('../controllers/jeep');

/* GET jeeps */
router.get('/', Jeep_controlers.jeep_view_all_Page );

module.exports = router;
