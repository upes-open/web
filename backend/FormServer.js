const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const serverless = require("serverless-http");

require("./utils/Connection");

//

dotenv.config({ path: "./config.env" });

//

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors({ origin: "*" }));
const router = express.Router();
app.use("/.netlify/functions", router);

//
const FormData = require("./utils/Schema");
const { application } = require("express");

const testData = new FormData({
  name: "test",
  SAP_ID: 123,
  E_Mail: "assdx",
  Contact_Number: 1223,
  Course: "test",
  year: 123,
});

//
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from Netlify Functions!" });
});

application.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

router.get("/test", (req, res) => {
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

router.get("/viewAll", (req, res) => {
  if (req.query.view_key == process.env.VIEW_KEY) {
    FormData.find().then((data) => {
      res.send(data);
    });
  } else {
    res.send("You are not authorized to view this page");
  }
});

router.post("/form", (req, res) => {
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

module.exports.handler = serverless(app);
