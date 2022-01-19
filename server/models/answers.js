const sql = require('../../db/index.js');

module.exports = {
  test: async function(id) {
    try {
      console.log("ID IS ", id);
      const aTables = await sql`
        SELECT a.body, a.id as answer_id, a.date_written as date, a.answerer_name, a.helpful as helpfulness, json_agg(ap.url) as photos
        FROM answers a
        LEFT OUTER JOIN answers_photos ap
        ON a.id = ap.answer_id
        where a.helpful = ${id}
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
  },
  put: async function(id) {
    try {
      const update = await sql`UPDATE answers
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
      const report = await sql`UPDATE answers
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
  },
  post: async function(data) {
    try{
      const {body, name, email, question_id, photos} = data;
      const date = Date.now();
      const newID = await sql `SELECT id FROM answers ORDER BY id DESC limit 1`;
      newID.id++;
      const insert = await sql`INSERT INTO  (id, body, asker_name, asker_email, product_id, date_written, helpful, reported)
      VALUES ( ${newID.id}, ${body}, ${name}, ${email}, ${question_id}, ${date}, 0, false)
      RETURNING *
      `

      for(var i = 0; i < photos.length; i++){
        const photoID = await sql `SELECT id FROM answers_photos ORDER BY id DESC limit 1`;
        photoID.id++;
        const insert = await sql `INSERT INTO (id, answer_id, url)
        VALUES (${photoID.id}, ${newID}, ${photos[i]})
        `

      }
      console.log("INSERTED ", insert);

    }
    catch (err) {
      console.error(err);
    }
  }
}