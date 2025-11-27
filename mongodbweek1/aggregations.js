use plp_bookstore;

// =========================
// AVERAGE PRICE BY GENRE
// =========================
print("Average book price by genre:");
printjson(
  db.books.aggregate([
    { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
  ]).toArray()
);

// =========================
// AUTHOR WITH MOST BOOKS
// =========================
print("Author with the most books:");
printjson(
  db.books.aggregate([
    { $group: { _id: "$author", total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 1 }
  ]).toArray()
);

// =========================
// GROUP BOOKS BY DECADE
// =========================
print("Books grouped by publication decade:");
printjson(
  db.books.aggregate([
    {
      $group: {
        _id: {
          $subtract: [
            "$published_year",
            { $mod: ["$published_year", 10] }
          ]
        },
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ]).toArray()
);
