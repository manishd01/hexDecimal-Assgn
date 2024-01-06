const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("test");
});
app.get("/users", async (req, res) => {
  const apiC = await fetch("https://jsonplaceholder.typicode.com/users");
  const maindata = await apiC.json();
  console.log("getting data:", maindata);
  res.json(maindata);
});
app.get("/users/:id", async (req, res) => {
  try {
    const userdata = await fetch("https://jsonplaceholder.typicode.com/todos");
    const getdata = await userdata.json();
    console.log(getdata);

    const resultArray = [];

    let curid = parseInt(req.params.id);
    const filteredData = getdata.filter((todo) => todo.userId === curid);

    console.log(filteredData, "ssss");
    res.send(filteredData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.listen(8080, () => {
  console.log("working");
});
