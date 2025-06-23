const express = require("express");
const path = require("node:path");
const app = express();
const authorRouter = require("./routes/authorRouter");
const indexRouter = require("./routes/indexRouter");
const bookRouter = require("./routes/bookRouter");
const aboutRouter = require("./routes/aboutRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/about", aboutRouter);
app.use("/", indexRouter);

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}!`);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err);
});