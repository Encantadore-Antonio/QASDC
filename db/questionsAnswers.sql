DROP TABLE IF EXISTS answers;

CREATE TABLE answers(
id integer,
question_id integer,
body text,
date_written bigint,
answerer_name text,
answerer_email text,
reported boolean,
helpful int);

DROP TABLE IF EXISTS questions;

CREATE TABLE questions(
id integer,
product_id integer,
body text,
date_written bigint,
asker_name text,
asker_email text,
reported boolean,
helpful integer

);

DROP TABLE IF EXISTS answers_photos;

CREATE TABLE answers_photos(
  id integer,
  answer_id integer,
  url text
);