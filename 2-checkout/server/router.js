const router = require("express").Router();
const controllers = require('./controllers')

router.get('/checkout', controllers.get)
router.post('/checkout', controllers.post)
router.patch('/checkout', controllers.patch)
router.delete('/checkout', controllers.delete)

module.exports = router;