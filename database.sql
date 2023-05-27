CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    data VARCHAR,
    person_id INTEGER,
    date VARCHAR,

    FOREIGN KEY (person_id) REFERENCES person (id)
);

CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
);