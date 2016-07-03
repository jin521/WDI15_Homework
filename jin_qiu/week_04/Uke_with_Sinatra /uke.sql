CREATE TABLE uke (

  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  size TEXT,
  image TEXT
);


INSERT INTO uke (name, family, size, image) VALUES ( "Jin", "Hawaii", "Pocket", "http://www.howtoukulele.com/wp-content/uploads/2013/05/holding-the-ukulele.jpg");
-- We don't need to specify the attributes though - we can just use the values, like this...
