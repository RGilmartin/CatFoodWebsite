import { Database, open } from "sqlite";
import sqlite3 from "sqlite3";

// Let's initialize it as null initially, and we will assign the actual database instance later.
let db = null;

// Define the GET request handler function
export async function GET(req, res) {
  // Check if the database instance has been initialized
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "./collection.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }

  // Perform a database query to retrieve all items from the "cans" table
  const items = await db.all("SELECT * FROM cans");

  // Return the items as a JSON response with status 200
  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

export async function POST(req, res) {
  // Check if the database instance has been initialized
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "./collection.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }

  // Parse the request body as JSON
  const body = await req.json();

  // Insert the new item into the "cans" table
  await db.run(
    `INSERT INTO cans(name, cal_kg, gr_can, price, currency, value_rating) VALUES(?, ?, ? ,?, ?, ?)`,
    [
      body.name,
      body.cal_kg,
      body.gr_can,
      body.price,
      body.currency,
      body.value_rating,
    ],
  );

  // Return a success response with status 201
  return new Response("Item added successfully", {
    status: 201,
  });
}
