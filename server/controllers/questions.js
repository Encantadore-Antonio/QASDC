const model = require('../models');

module.exports = {
  get: function(req, res) {
    console.log("It's working");
    model.questions.test();
  }
}