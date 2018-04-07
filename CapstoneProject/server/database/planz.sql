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
uniqueurl_id INTEGER NOT NULL REFERENCES eventcreation(id)
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