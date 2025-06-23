const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const indexRouter = require("./routes/indexRouter");
const bookRouter = require("./routes/bookRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}!`);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err);
});