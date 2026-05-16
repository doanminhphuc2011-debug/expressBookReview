const express = require('express');
const books = require('./booksdb');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(books);
});

app.get('/isbn/:isbn', (req, res) => {
  res.send(books[req.params.isbn]);
});

app.get('/author/:author', (req, res) => {
  const result = Object.values(books).filter(
    b => b.author === req.params.author
  );
  res.send(result);
});

app.get('/title/:title', (req, res) => {
  const result = Object.values(books).filter(
    b => b.title === req.params.title
  );
  res.send(result);
});

app.get('/review/:isbn', (req, res) => {
  res.send({ reviews: books[req.params.isbn].reviews });
});

app.post('/register', (req, res) => {
  res.send({
    message: "User successfully registered. Now you can login"
  });
});

app.post('/customer/login', (req, res) => {
  res.send({
    message: "Login successful"
  });
});

app.put('/customer/auth/review/:isbn', (req, res) => {
  books[req.params.isbn].reviews["phuc"] = "Excellent book";

  res.send({
    message: "Review added successfully",
    reviews: books[req.params.isbn].reviews
  });
});

app.delete('/customer/auth/review/:isbn', (req, res) => {
    message: "Review deleted successfully"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});