const model = require('../models');

module.exports = {
  get: function(req, res) {
    console.log("Working again!");
    model.answers.test();
  }
}