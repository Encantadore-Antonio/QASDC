const sql = require('../../db/index.js');

module.exports = {
  test: async function() {
    try {
      const tables = await sql`
        SELECT body FROM answers limit 5
        `
      console.log(tables);
      return tables;
    }
    catch (err) {
      console.error(err);
    }
  }
}