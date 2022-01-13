const postgres = require('postgres');

const sql = postgres({
host: 'localhost',
port: 5432,
path: '',
database: 'questionsAnswers',
username: 'jdcorral',
password: '',
max: 10,
onnotice: console.log,
})

module.exports = sql;