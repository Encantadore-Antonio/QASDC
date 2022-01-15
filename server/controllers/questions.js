const model = require('../models');

module.exports = {
  get: function(req, res) {
    console.log("It's working");
    var test;
    //console.log(req.headers.product_id);
    model.questions.test(req.headers.product_id)
      .then((data) => {
        console.log(data);
        res.send(data);
        test = data;
        console.log("DATA ", test)
      })
  },
  put: function(req, res) {
    model.questions.put(req.params.question_id);
    res.end();

  },
  report: function(req, res) {
    model.questions.report(req.params.question_id);
    res.end();
  }
}