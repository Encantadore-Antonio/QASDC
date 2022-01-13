const controller = require('./controllers');
const router = require('express').Router();

router.get('/questions', controller.questions.get);
router.get('/answers', controller.answers.get);
router.get('/answers_photos', controller.answers_photos.get);

module.exports = router;