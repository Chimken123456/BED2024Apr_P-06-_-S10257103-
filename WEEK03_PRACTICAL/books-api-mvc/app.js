const express = require("express");
const bodyParser = require("body-parser");
const booksController = require("./controllers/booksController"); // Import controllers
const validateBook = require("./middlewares/validateBook");
const methodlog = require("./middlewares/methodlog");

const app = express();

app.use(bodyParser.json()); // Parse incoming JSON data in request body
app.use(bodyParser.urlencoded({ extended: true })); // For form data handling

// Define individual routes for each controller function
app.get("/books",methodlog, booksController.getAllBooks);
app.get("/books/:id",methodlog,booksController.getBookById);
app.post("/books",methodlog,validateBook, booksController.createBook);
app.put("/books/:id",methodlog,validateBook, booksController.updateBook);
app.delete("/books/:id", methodlog,booksController.deleteBook);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});






