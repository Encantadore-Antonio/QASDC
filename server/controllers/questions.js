const model = require('../models');

module.exports = {
  get: function(req, res) {
    var test;
    model.questions.test(req.headers.product_id)
      .then((data) => {
        res.send(data);
        test = data;
      })
  },
  put: function(req, res) {
    model.questions.put(req.params.question_id);
    res.end();

  },
  report: function(req, res) {
    model.questions.report(req.params.question_id);
    res.end();
  },
  post: function(req, res) {
    model.questions.post(req.body);
    res.end();
  }
}