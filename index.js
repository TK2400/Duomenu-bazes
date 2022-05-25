const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb+srv://TK:TK2400@cluster0.y5udm.mongodb.net/?retryWrites=true&w=majority")

mongoClient.connect(function (err, client) {
    const database = client.db("usersdb");
    const collection = database.collection("users");

    // collection
    //     .find({ name: "Brad" })
    //     .toArray(function (err, result) {
    //         console.log(result)
    //         client.close()
    //     })

    collection
    .find( {age: { $gt: 35} })
    . toArray(function (err, result) {
        console.log(result);
        client.close()
        return
    })

    // const newUsers = [
    //     { name: "Tom", age: 30 },
    //     { name: "Adam", age: 40 },
    //     { name: "Jon", age: 60 },
    //     { name: "Brad", age: 50 },
    //     { name: "Tim", age: 15 },
    // ];
    // collection.insertMany(newUsers, function (err, result) {
    //     if (err) {
    //         return console.log("Failed to write an user");
    //     }
    //     collection.find().toArray(function (err, result) {
    //         if (err) {
    //             return console.log("errr", err);
    //         }
    //         console.log("Result:", result);
    //         client.close();
    //     });
    // });
});



