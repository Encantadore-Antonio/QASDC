const sql = require('../../db/index.js');

module.exports = {
  test: async function(id) {
    try {
      const tables = await sql`
        SELECT q.body as question_body, q.id as question_id, q.asker_name as asker_name, q.helpful as question_helpfulness, q.reported as reported, json_agg(json_build_object('body', a.body, 'id', a.id, 'answerer_name', a.answerer_name, 'helpfulness', a.helpful, 'photos', ap.url)) as answers
        FROM questions q
        LEFT OUTER JOIN answers a
        ON q.id = a.question_id
        LEFT OUTER JOIN answers_photos ap
        ON ap.answer_id = a.id
        WHERE q.id = ${id}
        group by q.body, q.id, q.asker_name, q.helpful, q.reported
        limit 10;
        `
      //console.log(tables);
      return tables;
    }
    catch (err) {
      console.error(err);
    }
  }
}
