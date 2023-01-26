const express = require("express");
const app = express();
const port = 3045;

app.get("/", (req, res) => res.send("Hello World!"));

const secure = (req, res,next) => {
  if (req.params.token?.length > 3) {
    next();
  } else {
    res.status(403).send("forbidden");
  }
};

app.get("/verify/:token", secure, (req, res) => {
  res.send("Token exists more 3 ");
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
