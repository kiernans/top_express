const { Router } = require("express");

const aboutRouter = Router();

aboutRouter.get("/", (req, res) => res.render("about", { text: "This app is for learning Express from The Odin Project" }));

module.exports = aboutRouter;
