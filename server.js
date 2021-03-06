// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

const database = [{
  name: 'Test',
  number: 'Test',
  tableSize: 'Test',
  uniqueId: 'Test',
}]


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Restaurant (DATA)
// =============================================================
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/reservations", function (req, res) {
  res.sendFile(path.join(__dirname, 'add.html'));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/api/tables', (req, res) => {
  res.json(database)
})

app.post('/api/tables', (req, res) => {
  const newReservation = req.body
  console.log(newReservation)
  database.push(newReservation)

  res.json(newReservation)
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
