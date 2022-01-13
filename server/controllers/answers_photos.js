const model = require('../models');

module.exports = {
  get: function(req, res) {
    console.log("This too");
    model.answers_photos.test();
  }
}