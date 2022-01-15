const sql = require('../../db/index.js');

module.exports = {
  test: async function(id) {
    try {
      const tables = await sql`
      SELECT q.body as question_body, q.date_written as question_date, q.id as question_id, q.asker_name as asker_name, q.helpful as question_helpfulness, q.reported as reported
      FROM questions q
      WHERE q.product_id = ${id} AND q.reported = false
      limit 5;
        `
      //console.log(tables);
      for(var i = 0; i < tables.length; i++) {
        const answers = await sql`
        SELECT a.body, a.id , a.date_written as date, a.answerer_name, a.helpful as helpfulness, json_agg(ap.url) as photos
        FROM answers a
        LEFT OUTER JOIN answers_photos ap
        ON a.id = ap.answer_id
        where a.question_id = ${id}
        GROUP BY a.body, a.id, a.date_written, a.answerer_name, a.helpful
        limit 5
        `
        tables[i].answers = {};
        for(var k = 0; k < answers.length; k++) {
          tables[i].answers[answers[k].id] = answers[k];
        }
      }

      return {product_id: id, results: tables};
    }
    catch (err) {
      console.error(err);
    }
  },
  put: async function(id) {
    try {
      const update = await sql`UPDATE questions
      SET helpful = helpful + 1
      WHERE id = ${id}
      RETURNING helpful
      ;
      `
      console.log("UPDATED", update);
    }
    catch (err) {
      console.error(err);
    }
  },
  report: async function(id) {
    try {
      const report = await sql`UPDATE questions
      SET reported = true
      WHERE id = ${id}
      RETURNING reported
      ;
      `
      console.log("REPORTED ", report);
    }
    catch (err) {
      console.error(err);
    }
  }

}

/*SELECT q.body as question_body, q.id as question_id, q.asker_name as asker_name, q.helpful as question_helpfulness, q.reported as reported, json_agg(json_build_object('body', a.body, 'id', a.id, 'answerer_name', a.answerer_name, 'helpfulness', a.helpful, 'photos', ap.url, 'photo_id', ap.id, 'answer_id', ap.answer_id )) as answers
        FROM questions q
        LEFT OUTER JOIN answers a
        ON q.id = a.question_id
        LEFT OUTER JOIN answers_photos ap
        ON ap.answer_id = a.id
        WHERE q.id = ${id}
        group by q.body, q.id, q.asker_name, q.helpful, q.reported
        limit 10;
        */