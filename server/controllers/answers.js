const model = require('../models');

module.exports = {
  get: function(req, res) {
    model.answers.test(req.headers.product_id)
      .then((data) => {
        //console.log(data);
        res.send({results: data});
      })
  },
  put: function(req, res) {
    model.answers.put(req.params.answer_id)
    res.end();
  },
  report: function(req, res) {
    model.answers.report(req.params.answer_id)
    res.end();
  },
  post: function(req, res) {
    var data = req.body;
    data['question_id'] = req.params.question_id;
    model.answers.post(data);
    res.end();
  }
}