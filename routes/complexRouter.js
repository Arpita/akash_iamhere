var express =  require('express');
var complexController = require('../controllers/complexController')
var router = express.Router();

router
.get('/',(req,res)=>{
    res.redirect('/');
})
.post('/addApData',complexController.addApData)

router
.get('/showApData',complexController.showApData)

router
.get('showAvailableFlats',complexController.showAvailableFlats)

router
.post('updateAvailableFlats',complexController.updateAvailableFlats)

module.exports = router;