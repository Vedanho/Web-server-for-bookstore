const express = require("express");

const mongoose = require("mongoose");

const app = express();
const port = 3500;

app.use(express.json());
app.use(require("./routs/book.router"));
app.use(require("./routs/genre.router"));
app.use(require("./routs/review.router"));
app.use(require('./routs/author.router'))

mongoose
  .connect(
    "mongodb+srv://Amir:intocode@cluster0.gzzxb.mongodb.net/bookstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединии с сервером MongoDB"));
app.listen(port, () => {
  console.log("Server is working");
});
