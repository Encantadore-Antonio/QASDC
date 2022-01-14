const sql = require('../../db/index.js');

module.exports = {
  test: async function(id) {
    try {
      const aTables = await sql`
        SELECT a.body, a.id as answer_id, a.date_written as date, a.answerer_name, a.helpful as helpfulness, json_agg(ap.url) as photos
        FROM answers a
        LEFT OUTER JOIN answers_photos ap
        ON a.id = ap.answer_id
        where a.question_id = ${id}
        GROUP BY a.body, a.id, a.date_written, a.answerer_name, a.helpful
        limit 5
        `

        // const qTables = await sql`
        // SELECT q.product_id, json_agg(json_build_object( 'question_body', q.body,  'question_id', q.id, 'asker_name', q.asker_name, 'question_helpfulness', q.helpful, 'reported', q.reported)) as results
        // FROM questions q
        // LEFT OUTER JOIN answers a
        // ON q.id = a.question_id
        // LEFT OUTER JOIN answers_photos ap
        // ON ap.answer_id = a.id
        // WHERE q.product_id = ${id} AND a.reported != true
        // group by q.product_id
        // limit 10;
        // `
      //console.log(tables);
      //console.log('Q ', qTables[0].results);
      console.log('A ', aTables);
      return aTables;
    }
    catch (err) {
      console.error(err);
    }
  }
}