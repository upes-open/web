const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

require("./utils/Connection");

//

dotenv.config({ path: "./config.env" });

//

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({ origin: "*" }));

//
const FormData = require("./utils/Schema");

const testData = new FormData({
  name: "test",
  SAP_ID: 123,
  E_Mail: "assdx",
  Contact_Number: 1223,
  Course: "test",
  year: 123,
});

//
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/.netlify/functions/hello", (req, res) => {
  res.json({ message: "Hello from Netlify Functions!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/test", (req, res) => {
  savestatus = 200;
  testData.save(function (err) {
    if (err.code === 11000) {
      console.log("Duplicate form");
      savestatus = 999;
    }
    // saved!
  });
  res.sendStatus(savestatus);
});

app.get("/viewAll", (req, res) => {
  if (req.query.view_key == process.env.VIEW_KEY) {
    FormData.find().then((data) => {
      res.send(data);
    });
  } else {
    res.send("You are not authorized to view this page");
  }
});

app.post("/form", (req, res) => {
  savestatus = 200;
  const formData = new FormData({
    name: req.body.name,
    SAP_ID: req.body.SAP_ID,
    E_Mail: req.body.E_Mail,
    Contact_Number: req.body.Contact_Number,
    Course: req.body.Course,
    year: req.body.year,
  });
  formData.save();

  res.sendStatus(savestatus);
});
