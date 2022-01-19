COPY questions
FROM '/Users/jdcorral/Documents/work/SDC/QASDC/questions.csv'
DELIMITER ','
CSV HEADER;

COPY answers
FROM '/Users/jdcorral/Documents/work/SDC/QASDC/answers.csv'
DELIMITER ','
CSV HEADER;


COPY answers_photos
FROM '/Users/jdcorral/Documents/work/SDC/QASDC/answers_photos.csv'
DELIMITER ','
CSV HEADER;