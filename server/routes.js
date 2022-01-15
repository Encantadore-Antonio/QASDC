const controller = require('./controllers');
const router = require('express').Router();

router.get('/questions', controller.questions.get);
router.get('/answers', controller.answers.get);
router.get('/answers_photos', controller.answers_photos.get);
router.put('/answers/:answer_id', controller.answers.put)
router.put('/questions/:question_id', controller.questions.put);
router.put('/questions/:question_id/report', controller.questions.report);

module.exports = router;