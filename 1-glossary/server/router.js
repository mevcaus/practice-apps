const router = require('express').Router();
const controllers = require('./controllers')

router.get('/glossary', controllers.get);
router.post('/glossary', controllers.post);
router.patch('/glossary', controllers.patch);
router.delete('/glossary', controllers.delete);

module.exports = router;