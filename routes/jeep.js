var express = require('express');
var router = express.Router();
const Jeep_controlers= require('../controllers/jeep');
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
/* GET update costume page */
router.get('/update', secured,
Jeep_controlers.jeep_update_Page);

/* GET jeeps */
router.get('/', Jeep_controlers.jeep_view_all_Page );
/* GET detail costume page */
router.get('/detail', Jeep_controlers.jeep_view_one_Page);
/* GET create costume page */
router.get('/create', Jeep_controlers.jeep_create_Page);
/* GET create update page */
router.get('/update',secured, Jeep_controlers.jeep_update_Page);
/* GET delete costume page */
router.get('/delete', Jeep_controlers.jeep_delete_Page);



module.exports = router;

