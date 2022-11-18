const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// your code goes here

const studentArray = require("./InitialData");

app.get("/api/student", async (req, res) => {
  try {
    const Student = await studentArray;
    res.status(200).json({
      status: "success",
      Data: Student,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

app.get("/api/student/:id", async (req, res) => {
  try {
    const Student = await studentArray.find(
      (Student) => req.params.id == Student.id
    );
    if (Student) {
      res.status(200).json({
        status: "sucsess",
        data: Student,
      });
    } else {
      res.status(404).json({
        status: "failed",
        message: "Invalid id",
      });
    }
  } catch (e) {
    res.status(501).json({
      status: "failed",
      message: e.message,
    });
  }
});

app.post("/api/student", async (req, res) => {
  try {
    req.body.id = studentArray[studentArray.length - 1].id + 1;
    if (req.body.name == null || req.body.currentClass == null || req.body.division == null) {
      res.status(400).json({
        status: "failed",
        message: "incomplete details",
      });
    } else {
      studentArray.push(req.body);
      res.status(200).json({
        status: "Success",
        message: "Details added",
      })
      
    }
  } catch (e) {
    res.status(501).json({
      status: "failed",
      message: e.message,
    });
  }
});

app.put("/api/student/:id", async (req, res) => {
  try {
    const Index = await studentArray.findIndex((Student) => req.params.id == Student.id);
    if (Index != -1) {
      studentArray[Index] = req.body;
      req.body.id = parseInt(req.params.id);
      res.status(200).json({ studentArray });
    } else {
      res.status(400).json({
        status: "failed",
        message: "id is invalid",
      });
    }
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

app.delete("/api/student/:id", async (req, res) => {
  const Index = await studentArray.findIndex((Student) => req.params.id == Student.id);
  if (Index != -1) {
    studentArray.splice(Index, 1);
    res.status(200).json({ studentArray });
  } else {
    res.status(400).json({
      status: "failed",
      message: "id is Invalid",
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
