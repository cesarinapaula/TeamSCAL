DROP DATABASE IF EXISTS planz;
CREATE DATABASE planz;

\c planz;


CREATE TABLE eventcreation (
id SERIAL PRIMARY KEY,
uniqueurl VARCHAR UNIQUE NOT NULL,
eventname VARCHAR
);

CREATE TABLE locationpoll (
id SERIAL PRIMARY KEY,
uniqueurl_id INTEGER NOT NULL REFERENCES eventcreation(id),
choiceone VARCHAR,
choicetwo VARCHAR,
choicethree VARCHAR,
choicefour VARCHAR,
choicefive VARCHAR,
answerone INTEGER,
answertwo INTEGER,
answerthree INTEGER,
answerfour INTEGER,
answerfive INTEGER,
finalanswer VARCHAR
);

CREATE TABLE timedatepoll (
id SERIAL PRIMARY KEY,
uniqueurl_id INTEGER NOT NULL REFERENCES eventcreation(id),
choiceone VARCHAR,
choicetwo VARCHAR,
choicethree VARCHAR,
choicefour VARCHAR,
choicefive VARCHAR,
choicesix VARCHAR,
choiceseven VARCHAR,
choiceeight VARCHAR,
answerone INTEGER,
answertwo INTEGER,
answerthree INTEGER,
answerfour INTEGER,
answerfive INTEGER,
answersix INTEGER,
answerseven INTEGER,
answereight INTEGER,
finalanswer VARCHAR
);

CREATE TABLE conversations (
id SERIAL PRIMARY KEY,
uniqueurl_id INTEGER NOT NULL REFERENCES eventcreation(id),
messages VARCHAR
);

CREATE TABLE deadline (
id SERIAL PRIMARY KEY,
uniqueurl_id INTEGER NOT NULL REFERENCES eventcreation(id),
deadlinedate VARCHAR
);

INSERT INTO eventcreation (uniqueurl, eventname)
VALUES ('07f233b002d54462b4f2fdadfb7fbce8', 'End Of Capstone Party');

INSERT INTO locationpoll (uniqueurl_id, choiceone, choicetwo, choicethree, choicefour, choicefive, answerone, answertwo, answerthree, answerfour, answerfive) 
VALUES ((SELECT id FROM eventcreation WHERE uniqueurl='07f233b002d54462b4f2fdadfb7fbce8'), 'Barcade', 'Order In: Beer Run and Mr. Wonton', 'Karaoke', 'Hot Pot in Flushing', 'Random Seedy Place in LIC', 0,0,0,0,0);
