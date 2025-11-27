use plp_bookstore;

// =========================
// CREATE INDEXES
// =========================

// Index on title
db.books.createIndex({ title: 1 });
print("Index created on title");

// Compound index on author + published_year
db.books.createIndex({ author: 1, published_year: -1 });
print("Compound index created on author and published_year");

// =========================
// EXPLAIN PERFORMANCE
// =========================

// Example: Search using title
print("Explain output for title search:");
printjson(
  db.books.find({ title: "Atomic Habits" }).explain("executionStats")
);
