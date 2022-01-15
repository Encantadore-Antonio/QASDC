const model = require('../models');

module.exports = {
  get: function(req, res) {
    console.log("Working again!");
    model.answers.test(req.headers.product_id)
      .then((data) => {
        //console.log(data);
        res.send({results: data});
      })
  },
  put: function(req, res) {
    model.answers.put(req.params.answer_id)
    res.end();
  }
}