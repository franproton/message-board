var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Messageboard",
    newMessageURL: "/new",
    messages: messages,
  });
});

router.get("/new", function (req, res) {
  res.render("form", { title: "New message" });
});

router.post("/new", function (req, res) {
  console.log(req.body.text);
  console.log(req.body.user);
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
