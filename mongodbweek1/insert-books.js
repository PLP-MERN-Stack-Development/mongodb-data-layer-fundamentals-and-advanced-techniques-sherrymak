// Switch to the database
use plp_bookstore;

// Insert 10 sample books
db.books.insertMany([
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 15.99,
    in_stock: true,
    pages: 197,
    publisher: "HarperCollins"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 20.5,
    in_stock: true,
    pages: 320,
    publisher: "Avery"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 18.99,
    in_stock: true,
    pages: 448,
    publisher: "Crown"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    published_year: 2016,
    price: 14.99,
    in_stock: false,
    pages: 296,
    publisher: "Grand Central"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Technology",
    published_year: 1999,
    price: 42.0,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Technology",
    published_year: 2008,
    price: 38.5,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 1997,
    price: 12.99,
    in_stock: true,
    pages: 309,
    publisher: "Scholastic"
  },
  {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    genre: "Finance",
    published_year: 1949,
    price: 25.0,
    in_stock: false,
    pages: 640,
    publisher: "Harper Business"
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Self-help",
    published_year: 2012,
    price: 17.5,
    in_stock: true,
    pages: 371,
    publisher: "Random House"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 22.99,
    in_stock: true,
    pages: 498,
    publisher: "Harper"
  }
]);

print("✔ Successfully inserted 10 books into plp_bookstore.books!");
