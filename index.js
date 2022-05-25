const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb+srv://TK:TK2400@cluster0.y5udm.mongodb.net/?retryWrites=true&w=majority")
mongoClient.connect(function (error, client) {
  if (error) {
    return console.log("Error was:", error);
  }
  console.log("Mongo connection success");
  client.close();
});