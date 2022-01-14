const sql = require('../../db/index.js');

module.exports = {
  test: async function() {
    try {
      const tables = await sql`
        SELECT url FROM answers_photos limit 10;`
      console.log(tables);
    }
    catch (err) {
      console.error(err);
    }
  }
}