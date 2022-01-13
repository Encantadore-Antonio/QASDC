COPY questions
FROM '/Users/jdcorral/Downloads/SDC-CVS/questions.csv'
DELIMITER ','
CSV HEADER;

COPY answers
FROM '/Users/jdcorral/Downloads/SDC-CVS/answers.csv'
DELIMITER ','
CSV HEADER;


COPY answers_photos
FROM '/Users/jdcorral/Downloads/SDC-CVS/answers_photos.csv'
DELIMITER ','
CSV HEADER;