DROP DATABASE IF EXISTS test;
CREATE DATABASE test;

\c test; -- connect to db

-- TODO update name of db ^^

CREATE TABLE games (
  id SERIAL,
  name VARCHAR(50) NOT NULL,
  original_price DECIMAL,
  sale_price DECIMAL NULL,
  PRIMARY KEY (id)
);

CREATE TABLE dlc (
  id SERIAL,
  name VARCHAR(200) NOT NULL,
  price DECIMAL NULL,
  user_reviews_overall VARCHAR(15),
  user_reviews_num INTEGER,
  user_tags TEXT [],
  game_id INTEGER REFERENCES games,
  PRIMARY KEY (id),
);

CREATE TABLE dlcImages (
  id SERIAL,
  image ???, -- TODO what datatype?
  dlc_ID INTEGER REFERENCES dlc,
  PRIMARY KEY (id),
);
