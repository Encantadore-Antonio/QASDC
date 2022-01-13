DROP TABLE IF EXISTS answers;

CREATE TABLE answers(
id int,
question_id integer,
body text,
date_written bigint,
answerer_name text,
answerer_email text,
reported boolean,
helpful int);

DROP TABLE IF EXISTS questions;

CREATE TABLE questions(
id int,
product_id integer,
body text,
date_written bigint,
asker_name text,
asker_email text,
reported boolean,
helpful int

);

DROP TABLE IF EXISTS answers_photos;

CREATE TABLE answers_photos(
  id int,
  answer_id int,
  url text
);