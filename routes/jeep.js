var express = require('express');
var router = express.Router();
const Jeep_controlers= require('../controllers/jeep');

/* GET jeeps */
router.get('/', Jeep_controlers.jeep_view_all_Page );
/* GET detail costume page */
router.get('/detail', Jeep_controlers.jeep_view_one_Page);
/* GET create costume page */
router.get('/create', Jeep_controlers.jeep_create_Page);
/* GET create update page */
router.get('/update', Jeep_controlers.jeep_update_Page);
/* GET delete costume page */
router.get('/delete', Jeep_controlers.jeep_delete_Page);



module.exports = router;

