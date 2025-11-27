use plp_bookstore;

// =========================
// BASIC READ QUERIES
// =========================

// Find all books in a specific genre
print("Books in genre Fiction:");
printjson(db.books.find({ genre: "Fiction" }).toArray());

// Find books published after a certain year
print("Books published after 2010:");
printjson(db.books.find({ published_year: { $gt: 2010 } }).toArray());

// Find books by a specific author
print("Books by James Clear:");
printjson(db.books.find({ author: "James Clear" }).toArray());

// =========================
// UPDATE QUERY
// =========================

// Update price of a specific book
db.books.updateOne(
  { title: "Atomic Habits" },
  { $set: { price: 22.0 } }
);
print("Updated price for Atomic Habits");

// =========================
// DELETE QUERY
// =========================

// Delete a book by title
db.books.deleteOne({ title: "The Alchemist" });
print("Deleted The Alchemist");

// =========================
// ADVANCED QUERIES
// =========================

// Books in stock and published after 2010
print("Books in stock and published after 2010:");
printjson(
  db.books.find({
    in_stock: true,
    published_year: { $gt: 2010 }
  }).toArray()
);

// Projection: title, author, price only
print("Books with projection (title, author, price):");
printjson(
  db.books.find(
    {},
    { title: 1, author: 1, price: 1, _id: 0 }
  ).toArray()
);

// Sorting by price ASC
print("Books sorted by price ascending:");
printjson(db.books.find().sort({ price: 1 }).toArray());

// Sorting by price DESC
print("Books sorted by price descending:");
printjson(db.books.find().sort({ price: -1 }).toArray());

// Pagination: 5 books per page (page 2)
print("Pagination (page 2):");
printjson(db.books.find().skip(5).limit(5).toArray());
