const controller = require('./controllers');
const router = require('express').Router();

router.get('qa/questions', controller.questions.get);
router.get('qa/questions/:question_id/answers', controller.answers.get);
router.get('qa/answers_photos', controller.answers_photos.get);
router.put('qa/answers/:answer_id/helpful', controller.answers.put)
router.put('qa/questions/:question_id/helpful', controller.questions.put);
router.put('qa/questions/:question_id/report', controller.questions.report);
router.put('qa/answers/:answer_id/report', controller.answers.report);
router.post('qa/questions', controller.questions.post);
router.post('qa/questions/:question_id/answers', controller.answers.post);

module.exports = router;