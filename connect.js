const sqlite3 = require("sqlite3").verbose();

const food = [
  ["Nulo Chicken and turkey 5.5oz", 1239, 156, 1.85, "USD", 5],
  ["Nulo Beef and Lamb 5.5oz", 1457, 156, 2.29, "USD", 4],
];

// Connecting to or creating a new SQLite database file
const db = new sqlite3.Database(
  "./collection.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  },
);

// Serialize method ensures that database queries are executed sequentially
db.serialize(() => {
  // Create the items table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS cans (
        id INTEGER PRIMARY KEY,
        name TEXT,
        cal_kg REAL,
        gr_can REAL,
        price REAL,
        currency TEXT,
        value_rating REAL
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created cans table.");

      // Clear the existing data in the products table
      db.run(`DELETE FROM cans`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from cans");

        const insertSql = `INSERT INTO cans(name, cal_kg, gr_can, price, currency, value_rating) VALUES(?, ?, ? ,?, ?, ?)`;

        db.run(insertSql, food[0], function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, food[1], function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        //   Close the database connection after all insertions are done
        db.close((err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Closed the database connection.");
        });
      });
    },
  );
});
