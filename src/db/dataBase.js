const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://profMartin:Talentos2025@clustertest.jilgbna.mongodb.net/talentos2025"
// );

mongoose.connect("mongodb://localhost:27017/talentos2025");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error: "));

db.once("open", () => {
  console.log("Connectes to MongoDb");
});

module.exports = mongoose;
